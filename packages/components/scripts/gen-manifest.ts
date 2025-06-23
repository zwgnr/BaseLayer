import { Project, Node } from "ts-morph";
import glob from "fast-glob";
import { createHash } from "crypto";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { basename } from "path";

interface ComponentMeta {
  category: string;
  status: "alpha" | "beta" | "stable" | "deprecated";
  description: string;
  tags: string[];
  version: string;
}

interface ComponentManifestEntry {
  id: string;
  displayName: string;
  path: string;
  template: string;
  imports: string[];
  meta: ComponentMeta;
  sha256: string;
}

interface ComponentManifest {
  generatedAt: string;
  version: string;
  components: ComponentManifestEntry[];
}

async function generateManifest(): Promise<void> {
  console.log("🔍 Discovering components...");

  // Discover component files
  const componentPaths = await glob("src/**/*.{tsx,ts}", {
    ignore: [
      "**/*.test.*",
      "**/*.stories.*",
      "**/node_modules/**",
      "**/index.{tsx,ts}",
      "**/registry.{tsx,ts}",
      "**/schema.{tsx,ts}",
    ],
  });

  console.log(`📦 Found ${componentPaths.length} component files`);

  // Initialize TypeScript project
  const project = new Project({
    tsConfigFilePath: "tsconfig.json",
    skipAddingFilesFromTsConfig: true,
  });

  // Add discovered files to project
  for (const path of componentPaths) {
    project.addSourceFileAtPath(path);
  }

  // Ensure output directories exist
  if (!existsSync("dist")) {
    mkdirSync("dist", { recursive: true });
  }
  if (!existsSync("dist/templates")) {
    mkdirSync("dist/templates", { recursive: true });
  }

  const components: ComponentManifestEntry[] = [];

  for (const filePath of componentPaths) {
    try {
      const component = await processComponent(project, filePath);
      if (component) {
        components.push(component);
        console.log(`✅ Processed ${component.displayName}`);

        // Generate clean template file
        await generateCleanTemplate(project, filePath, component);
      }
    } catch (error) {
      console.error(`❌ Failed to process ${filePath}:`, error);
    }
  }

  // Read package version
  const packageJson = JSON.parse(readFileSync("package.json", "utf8"));

  // Generate manifest
  const manifest: ComponentManifest = {
    generatedAt: new Date().toISOString(),
    version: packageJson.version,
    components,
  };

  // Write manifest
  const manifestPath = "dist/manifest.json";
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`🎉 Generated manifest with ${components.length} components`);
  console.log(`📄 Manifest saved to: ${manifestPath}`);
  console.log(`📁 Clean templates saved to: dist/templates/`);

  // Generate registry-v2.ts
  await generateRegistry(manifest);
}

async function processComponent(
  project: Project,
  filePath: string
): Promise<ComponentManifestEntry | null> {
  const sourceFile = project.getSourceFile(filePath);
  if (!sourceFile) return null;

  // Try to get the component name from exports
  let displayName = "Unknown";

  // First try: look for named exports that match typical component patterns
  const exportSymbols = sourceFile.getExportSymbols();

  for (const symbol of exportSymbols) {
    const name = symbol.getName();
    if (
      name !== "default" &&
      name !== "meta" &&
      /^[A-Z]/.test(name) &&
      !name.endsWith("Props") &&
      !name.endsWith("Type")
    ) {
      displayName = name;
      break;
    }
  }

  // Second try: check for default export
  const defaultExport = sourceFile.getDefaultExportSymbol();
  if (displayName === "Unknown" && defaultExport) {
    const exportName = defaultExport.getName();
    if (exportName !== "default") {
      displayName = exportName;
    }
  }

  // Third try: extract from filename
  if (displayName === "Unknown") {
    const fileName = basename(filePath, ".tsx");
    if (/^[A-Z]/.test(fileName)) {
      displayName = fileName;
    }
  }

  if (displayName === "Unknown") {
    return null;
  }

  const id = displayName
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();

  // Extract meta export
  const metaExport = sourceFile.getVariableDeclaration("meta");
  if (!metaExport) {
    console.warn(`⚠️  No meta export found in ${filePath}`);
    return null;
  }

  const metaValue = extractMetaValue(metaExport);
  if (!metaValue) {
    console.warn(`⚠️  Could not parse meta in ${filePath}`);
    return null;
  }

  // Extract imports
  const imports = extractImports(sourceFile);

  // Calculate file hash
  const fileContent = readFileSync(filePath, "utf8");
  const sha256 = createHash("sha256").update(fileContent).digest("hex");

  return {
    id,
    displayName,
    path: filePath,
    template: `/api/templates/${id}.tsx`,
    imports,
    meta: metaValue,
    sha256,
  };
}

function extractMetaValue(metaDeclaration: any): ComponentMeta | null {
  try {
    // Get the initializer (the object assigned to meta)
    let initializer = metaDeclaration.getInitializer();

    // Handle "as const" expressions
    if (Node.isAsExpression(initializer)) {
      initializer = initializer.getExpression();
    }

    if (!initializer || !Node.isObjectLiteralExpression(initializer)) {
      return null;
    }

    const meta: Partial<ComponentMeta> = {};

    for (const property of initializer.getProperties()) {
      if (Node.isPropertyAssignment(property)) {
        const name = property.getName();
        const value = property.getInitializer();

        if (Node.isStringLiteral(value)) {
          (meta as any)[name] = value.getLiteralValue();
        } else if (Node.isArrayLiteralExpression(value)) {
          (meta as any)[name] = value
            .getElements()
            .filter(Node.isStringLiteral)
            .map((el) => el.getLiteralValue());
        }
      }
    }

    // Validate required fields
    if (!meta.category || !meta.status || !meta.description) {
      return null;
    }

    return meta as ComponentMeta;
  } catch (error) {
    console.error("Error extracting meta:", error);
    return null;
  }
}

function extractImports(sourceFile: any): string[] {
  const imports = new Set<string>();

  for (const importDecl of sourceFile.getImportDeclarations()) {
    const moduleSpecifier = importDecl.getModuleSpecifierValue();

    // Skip relative imports
    if (moduleSpecifier.startsWith(".")) continue;

    // Add external dependencies
    if (!moduleSpecifier.startsWith("@/") && !moduleSpecifier.startsWith("~")) {
      // Extract base package name (e.g., 'react-aria-components' from 'react-aria-components/Button')
      const basePkg = moduleSpecifier.split("/")[0];
      imports.add(basePkg);
    }
  }

  return Array.from(imports);
}

async function generateRegistry(manifest: ComponentManifest): Promise<void> {
  const registryContent = `// Auto-generated registry from manifest
// Do not edit manually - regenerate with 'pnpm build'

import type { ComponentManifest, ComponentManifestEntry } from './schema';

const manifest: ComponentManifest = ${JSON.stringify(manifest, null, 2)};

export const COMPONENTS: readonly ComponentManifestEntry[] = manifest.components;
export type ComponentId = ComponentManifestEntry['id'];

export function getComponent(id: ComponentId): ComponentManifestEntry | null {
  return COMPONENTS.find(c => c.id === id) || null;
}

export function getComponentsByCategory(category: string): ComponentManifestEntry[] {
  return COMPONENTS.filter(c => c.meta.category === category);
}

export function getComponentsByStatus(status: string): ComponentManifestEntry[] {
  return COMPONENTS.filter(c => c.meta.status === status);
}

export function searchComponents(query: string): ComponentManifestEntry[] {
  const lowerQuery = query.toLowerCase();
  return COMPONENTS.filter(c => 
    c.displayName.toLowerCase().includes(lowerQuery) ||
    c.meta.description.toLowerCase().includes(lowerQuery) ||
    c.meta.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export { manifest };
export default COMPONENTS;
`;

  writeFileSync("src/registry.ts", registryContent);
  console.log("📝 Generated registry.ts");
}

/**
 * Generate a clean template file without meta exports
 * Uses AST manipulation to remove only the meta export while preserving everything else
 */
async function generateCleanTemplate(
  project: Project,
  filePath: string,
  component: ComponentManifestEntry
): Promise<void> {
  const sourceFile = project.getSourceFile(filePath);
  if (!sourceFile) return;

  // Get the original content
  const originalContent = sourceFile.getFullText();

  // Find the meta declaration using AST
  const metaDeclaration = sourceFile.getVariableDeclaration("meta");
  if (!metaDeclaration) {
    // No meta to remove, just write the original content
    const templatePath = `dist/templates/${component.id}.tsx`;
    writeFileSync(templatePath, originalContent);
    console.log(`📝 Generated clean template: ${templatePath}`);
    return;
  }

  // Get the variable statement containing the meta declaration
  const variableStatement = metaDeclaration.getVariableStatementOrThrow();

  // Get the exact position of the meta declaration in the source
  const start = variableStatement.getStart();
  const end = variableStatement.getEnd();

  // Remove the meta declaration by slicing the original content
  const beforeMeta = originalContent.slice(0, start);
  const afterMeta = originalContent.slice(end);

  // Combine and clean up whitespace
  let cleanContent = beforeMeta + afterMeta;

  // Clean up excessive newlines that might be left behind
  cleanContent = cleanContent.replace(/\n\s*\n\s*\n+/g, "\n\n");

  // Write the clean template
  const templatePath = `dist/templates/${component.id}.tsx`;
  writeFileSync(templatePath, cleanContent);

  console.log(`📝 Generated clean template: ${templatePath}`);
}

// Run the generator
generateManifest().catch(console.error);
