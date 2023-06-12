import * as vscode from 'vscode';
import { getWorkspaceRoot } from '../lib/getWorkspaceRoot';
import { findDirectory } from '../lib/findDirectory';
import * as fs from 'fs';
import * as path from 'path';

const fetch = require('node-fetch');

export const addCommand = vscode.commands.registerCommand('extension.add', async () => {
  console.log('Add command executed.');

  const options = [
    'Accordian',
    'Button',
    'Carousel',
    'Checkbox',
    'ColorPicker',
    'Dialog',
    'Dropdown',
    'HoverCard',
    'Switch',
  ];
  const selections = await vscode.window.showQuickPick(options, {
    placeHolder: 'Please choose the 🧪 you would like to add:',
    canPickMany: true,
  });

  if (!selections) {
    // User canceled the prompt without making a selection
    console.log('User canceled the selection.');
    return;
  }

  try {
    const response = await fetch('https://potion-ui-nu.vercel.app/api/potions.json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const potions = await response.json();

    const workspaceRoot = getWorkspaceRoot();
    if (workspaceRoot === null) {
      return;
    }

    const potionsDir = await findDirectory(workspaceRoot, 'potions');

    if (!potionsDir) {
      vscode.window.showErrorMessage(
        'Potions Directory not found, please create one and try again!'
      );
      return;
    }

    for (const selectedOption of selections) {
      const potion = potions.find((potion: { name: string }) => potion.name === selectedOption);
      if (potion) {
        const fileName = `${potion.potion}.tsx`;
        const content = potion.files;
        const filePath = path.join(potionsDir, fileName);
        fs.writeFileSync(filePath, content);
        console.log('File created:', filePath);
      } else {
        console.error(`Potion not found for option: ${selectedOption}`);
      }
    }
    vscode.window.showInformationMessage(`Potions created`);
    return;
  } catch (error) {
    console.error('Error retrieving potions:', error);
  }
});