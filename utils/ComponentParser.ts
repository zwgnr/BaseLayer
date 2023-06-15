import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

type Component = {
  framework: string;
  name: string;
  files: string;
};

// Get directory of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define directory path for the UI
const uiDir = path.resolve(__dirname, '../web/src/ui');

function findTsxFiles(dir: string, framework: string): Component[] {
  const elements = fs.readdirSync(dir, { withFileTypes: true });
  const components: Component[] = [];

  for (const element of elements) {
    const fullPath = path.join(dir, element.name);

    if (element.isDirectory()) {
      components.push(...findTsxFiles(fullPath, framework));
    } else if (path.extname(element.name) === '.tsx') {
      const fileContent = fs.readFileSync(fullPath, 'utf8');
      const componentName = path.basename(element.name, '.tsx');
      components.push({
        framework: framework,
        name: componentName,
        files: fileContent,
      });
    }
  }

  return components;
}

// Start search for .tsx files
const reactDir = path.join(uiDir, 'React');
const solidDir = path.join(uiDir, 'Solid');
const reactComponents = findTsxFiles(reactDir, 'React');
const solidComponents = findTsxFiles(solidDir, 'Solid');
const components = [...reactComponents, ...solidComponents];

// Create the components.ts file
const componentsFileContent = `export const components = ${JSON.stringify(components, null, 2)};`;

// Define path for the components.ts file
const componentsTsFile = path.resolve(__dirname, '../web/src/templates/components.ts');

// Write the components.ts file
fs.writeFileSync(componentsTsFile, componentsFileContent);
