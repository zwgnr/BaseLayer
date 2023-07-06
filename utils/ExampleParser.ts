import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

type Component = {
  name: string;
  files: string;
};

// Get directory of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define directory path for the Examples
const uiDir = path.resolve(__dirname, '../web/src/Examples');

function findTsxFiles(dir: string): Component[] {
  const elements = fs.readdirSync(dir, { withFileTypes: true });
  const components: Component[] = [];

  for (const element of elements) {
    const fullPath = path.join(dir, element.name);

    if (element.isDirectory()) {
      components.push(...findTsxFiles(fullPath));
    } else if (path.extname(element.name) === '.tsx') {
      const fileContent = fs.readFileSync(fullPath, 'utf8');
      const componentName = path.basename(element.name, '.tsx');
      components.push({
        name: componentName,
        files: fileContent,
      });
    }
  }

  return components;
}

// Start search for .tsx files
//const reactDir = path.join(uiDir, 'React');
//const solidDir = path.join(uiDir, 'Solid');
const reactComponents = findTsxFiles(uiDir);
//const solidComponents = findTsxFiles(solidDir, 'Solid');
const components = [...reactComponents];

// Create the components.ts file
const componentsFileContent = `export const components = ${JSON.stringify(components, null, 2)};`;

// Define path for the components.ts file
const componentsTsFile = path.resolve(__dirname, '../web/src/templates/components.ts');

// Write the components.ts file
fs.writeFileSync(componentsTsFile, componentsFileContent);
