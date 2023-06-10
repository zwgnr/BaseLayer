import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function convertToJSON(filename: string, relativePath: string): void {
  // Read file
  const data = fs.readFileSync(filename, 'utf-8');

  // Split data by newline to create an array
  let lines = data.split(/\r?\n/);

  // Remove the first line if it's a Solid import
  if (lines[0] === '/** @jsxImportSource solid-js */') {
    lines.shift();
  }

  // Escape double quotes in the code
  lines = lines.map((line) => line.replace(/"/g, "'"));

  // Extract base filename without extension
  const baseName = path.basename(filename, '.tsx');

  // Convert camelCase to kebab-case
  const kebabCaseName = baseName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

  // Check if the file is from the "Solid" folder
  const isSolid = relativePath.includes('Solid');

  // Set the prefix based on whether the file is from the "Solid" folder
  const prefix = isSolid ? `pui-s-${kebabCaseName}` : `pui-${kebabCaseName}`;

  // Format array as JSON
  const json = {
    [baseName]: {
      prefix: prefix,
      body: lines,
      description: `${baseName} component\n\n`,
    },
  };

  // Create new filename with the required extension
  const newFileName = `${kebabCaseName}.code-snippets`;

  // Set new path to be written
  const newPath = path.resolve(__dirname, '../extension/snippets', relativePath, newFileName);

  // Make sure directory exists
  fs.mkdirSync(path.dirname(newPath), { recursive: true });

  // Write JSON to a new file
  fs.writeFileSync(newPath, JSON.stringify(json, null, 2), 'utf-8');
}

// Recursive function to find .tsx files in a directory
function findTsxFiles(dir: string, relativeDir = '') {
  const elements = fs.readdirSync(dir, { withFileTypes: true });

  for (const element of elements) {
    const fullPath = path.join(dir, element.name);
    const relativePath = path.join(relativeDir, element.name);

    if (element.isDirectory()) {
      findTsxFiles(fullPath, relativePath);
    } else if (path.extname(element.name) === '.tsx') {
      convertToJSON(fullPath, path.dirname(relativePath));
    }
  }
}

// Get path to the components directory
const componentsPath = path.resolve(__dirname, '../web/src/ui');

// Start search for .tsx files
findTsxFiles(componentsPath);
