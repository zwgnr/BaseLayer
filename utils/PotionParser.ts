import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

type Potion = {
  potion: string;
  name: string;
  files: string;
};

// Get directory of the current module
const dirname = path.dirname(fileURLToPath(import.meta.url));

// Define directory path for the potions
const potionsDir = path.resolve(dirname, '../web/src/potions');

// Define path for the components.json.ts file
const potionsJsonTsFile = path.resolve(dirname, '../web/src/pages/api/potions.json.ts');

// Read all files from the components directory
const potionFiles = fs.readdirSync(potionsDir);

// Filter only .ts files
const tsFiles = potionFiles.filter((file) => path.extname(file) === '.ts');

// Parse each .ts file into a Component object
const potions: Potion[] = tsFiles.map((file) => {
  // Read content of the file
  const fileContent = fs.readFileSync(path.join(potionsDir, file), 'utf8');

  // Generate Potion object
  const potionName = path.basename(file, '.ts');

  // Generate displayName by removing "Potion" from the end of potionName
  let displayName = potionName;
  if(displayName.endsWith('Potion')) {
    displayName = displayName.slice(0, -6);
  }

  // Capitalize the first letter of the displayName
  displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

  return {
    potion: potionName,
    name: displayName,
    files: fileContent,
  };
});


// Read existing potions.json.ts file
const potionsJsonTsContent = fs.readFileSync(potionsJsonTsFile, 'utf8');

// Convert new potions array to a string
const potionsString = JSON.stringify(potions, null, 2)
  // Reformat to match the TypeScript syntax
  .replace(/"([^"]+)":/g, '$1:');

// Replace existing potions array in the file content with the new one
const newPotionsJsonTsContent = potionsJsonTsContent.replace(
  /(const potions: Potion\[] = )\[[\s\S]*?\];/m,
  `$1${potionsString};`
);

// Write updated content back to the potions.json.ts file
fs.writeFileSync(potionsJsonTsFile, newPotionsJsonTsContent);
