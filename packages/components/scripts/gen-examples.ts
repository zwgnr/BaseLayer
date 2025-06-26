import glob from "fast-glob";
import { Project } from "ts-morph";

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";

interface ExampleEntry {
  name: string;
  displayName: string;
  path: string;
  componentName: string;
}

async function generateExamples(): Promise<void> {
  console.log("🔍 Discovering examples...");

  // Discover example files
  const examplePaths = await glob("src/examples/**/*.{tsx,ts}", {
    ignore: [
      "**/*.test.*",
      "**/*.stories.*",
      "**/node_modules/**",
      "**/index.{tsx,ts}",
    ],
  });

  console.log(`📦 Found ${examplePaths.length} example files`);

  // Initialize TypeScript project
  const project = new Project({
    tsConfigFilePath: "tsconfig.json",
    skipAddingFilesFromTsConfig: true,
  });

  // Add discovered files to project
  for (const path of examplePaths) {
    project.addSourceFileAtPath(path);
  }

  // Create public directories
  const publicDir = "../../web/public";
  const publicExamplesDir = `${publicDir}/examples`;
  if (!existsSync(publicExamplesDir)) {
    mkdirSync(publicExamplesDir, { recursive: true });
  }

  const examples: ExampleEntry[] = [];
  const exampleImports: string[] = [];
  const exampleComponentsMap: string[] = [];

  for (const filePath of examplePaths) {
    try {
      const example = await processExample(project, filePath);
      if (example) {
        examples.push(example);
        console.log(`✅ Processed ${example.displayName}`);

        // Generate clean example file for public directory
        await generateCleanExample(project, filePath, example);

        // Generate import and map entries
        exampleImports.push(`import { ${example.componentName} } from "@baselayer/components";`);
        exampleComponentsMap.push(`"${example.name}": ${example.componentName},`);
      }
    } catch (error) {
      console.error(`❌ Failed to process ${filePath}:`, error);
    }
  }

  // Generate examples registry
  await generateExamplesRegistry(examples);

  // Generate dynamic examples map for web app
  await generateExamplesMap(exampleImports, exampleComponentsMap);

  // Update index.ts with example exports
  await updateIndexExports(examples);

  console.log(`🎉 Generated ${examples.length} examples`);
  console.log(`📁 Examples copied to: ${publicExamplesDir}/`);
}

async function processExample(
  project: Project,
  filePath: string
): Promise<ExampleEntry | null> {
  const sourceFile = project.getSourceFile(filePath);
  if (!sourceFile) return null;

  // Get the component name from exports
  let componentName = "Unknown";

  const exportSymbols = sourceFile.getExportSymbols();
  for (const symbol of exportSymbols) {
    const name = symbol.getName();
    if (
      name !== "default" &&
      /^[A-Z]/.test(name) &&
      !name.endsWith("Props") &&
      !name.endsWith("Type")
    ) {
      componentName = name;
      break;
    }
  }

  if (componentName === "Unknown") {
    return null;
  }

  // Extract name from filename
  const fileName = basename(filePath, ".tsx");
  const name = fileName
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();

  return {
    name,
    displayName: componentName,
    path: filePath,
    componentName,
  };
}

async function generateCleanExample(
  project: Project,
  filePath: string,
  example: ExampleEntry
): Promise<void> {
  const sourceFile = project.getSourceFile(filePath);
  if (!sourceFile) return;

  // Get the original content
  let content = sourceFile.getFullText();

  // Replace local imports with @components/base/ format
  content = content.replace(
    /from ["']@baselayer\/components["']/g,
    'from "@components/base"'
  );

  // Replace local relative imports with @components/base/ format
  // Transform "../core/button/button" to "@components/base/button" for templates
  content = content.replace(
    /from ["']\.\.\/core\/([^/]+)\/([^"']+)["']/g,
    'from "@components/base/$1"'
  );

  // Write to public directory
  const templatePath = `../../web/public/examples/${example.name}.txt`;
  writeFileSync(templatePath, content);

  console.log(`📝 Generated example template: ${templatePath}`);
}

async function generateExamplesRegistry(examples: ExampleEntry[]): Promise<void> {
  const registryEntries = examples.map(example => `  {
    name: "${example.name}",
    type: "registry:example" as const,
    files: [
      {
        path: "examples/${example.name}.txt",
        type: "registry:example" as const,
      },
    ],
  }`);

  const registryContent = `import type { ExamplesRegistry } from "./schema";

export const examples: ExamplesRegistry["items"] = [
${registryEntries.join(',\n')}
];

export function getExample(name: string) {
  return examples.find(example => example.name === name);
}

export default examples;`;

  writeFileSync("src/examples-registry.ts", registryContent);
  console.log("📝 Generated examples-registry.ts");
}

async function generateExamplesMap(imports: string[], mapEntries: string[]): Promise<void> {
  const mapContent = `// Auto-generated examples map
// Do not edit manually - regenerate with 'pnpm build'

${imports.join('\n')}

export const exampleComponents = {
${mapEntries.map(entry => `  ${entry}`).join('\n')}
} as const;

export type ExampleName = keyof typeof exampleComponents;
`;

  // Write to web app
  const mapPath = "../../web/lib/examples-map.ts";
  writeFileSync(mapPath, mapContent);
  console.log("📝 Generated examples-map.ts for web app");
}

async function updateIndexExports(examples: ExampleEntry[]): Promise<void> {
  // Read current index.ts
  const indexPath = "src/index.ts";
  let indexContent = readFileSync(indexPath, "utf8");

  // Find the examples section and replace it
  const exampleExports = examples.map(example => 
    `export { ${example.componentName} } from "./examples/${example.name}";`
  ).join('\n');

  // Replace the examples section
  const examplesStartRegex = /\/\/ Examples - Auto-generated[\s\S]*?(?=\/\/ Registry|$)/;
  const newExamplesSection = `// Examples - Auto-generated
${exampleExports}

`;

  if (examplesStartRegex.test(indexContent)) {
    indexContent = indexContent.replace(examplesStartRegex, newExamplesSection);
  } else {
    // If section doesn't exist, add it before the Registry section
    indexContent = indexContent.replace(
      /\/\/ Registry/,
      `${newExamplesSection}// Registry`
    );
  }

  writeFileSync(indexPath, indexContent);
  console.log("📝 Updated index.ts with example exports");
}

// Run the generator
generateExamples().catch(console.error); 