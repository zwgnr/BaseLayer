import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

type Component = {
  component: string;
  name: string;
  files: string;
};

// Get directory of the current module
const dirname = path.dirname(fileURLToPath(import.meta.url));

// Define directory path for the potions
const baseDir = path.resolve(dirname, '../web/src/components/base');

// Define path for the components.json.ts file
const baseJsonTsFile = path.resolve(dirname, '../web/src/pages/api/base.json.ts');

// Read all files from the components directory
const baseFiles = fs.readdirSync(baseDir);

// Filter only .ts files
const tsFiles = baseFiles.filter((file) => path.extname(file) === '.ts');

// Parse each .ts file into a Component object
const components: Component[] = tsFiles.map((file) => {
  // Read content of the file
  const fileContent = fs.readFileSync(path.join(baseDir, file), 'utf8');

  // Generate Potion object
  const componentName = path.basename(file, '.ts');

  // Generate displayName by removing "Potion" from the end of potionName
  let displayName = componentName;
  if(displayName.endsWith('Potion')) {
    displayName = displayName.slice(0, -6);
  }

  // Capitalize the first letter of the displayName
  displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

  return {
    component: componentName,
    name: displayName,
    files: fileContent,
  };
});


// Read existing potions.json.ts file
const baseJsonTsContent = fs.readFileSync(baseJsonTsFile, 'utf8');

// Convert new potions array to a string
const potionsString = JSON.stringify(components, null, 2)
  // Reformat to match the TypeScript syntax
  .replace(/"([^"]+)":/g, '$1:');

// Replace existing potions array in the file content with the new one
const newBaseJsonTsContent = baseJsonTsContent.replace(
  /(const potions: Potion\[] = )\[[\s\S]*?\];/m,
  `$1${potionsString};`
);

// Write updated content back to the potions.json.ts file
fs.writeFileSync(baseJsonTsFile, newBaseJsonTsContent);
