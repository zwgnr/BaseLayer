import * as vscode from 'vscode';
import { getWorkspaceRoot } from '../lib/getWorkspaceRoot';
import { findDirectory } from '../lib/findDirectory';
import * as fs from 'fs';
import * as path from 'path';
const fetch = require('node-fetch');

export const addCommand = vscode.commands.registerCommand('extension.add', async () => {
  const options = [
    'Badge',
    'Breadcrumbs',
    'Button',
    'Checkbox',
    'CheckboxGroup',
    'Calendar',
    'DateField',
    'DatePicker',
    'DateRangePicker',
    'Dialog',
    'ListBox',
    'Popover',
    'Menu',
    'Modal',
    'RadioGroup',
    'RangeCalendar',
    'SearchField',
    'Select',
    'Slider',
    'Switch',
    'Table',
    'TagGroup',
    'TextField',
    'TimeField',
    'Toggle',
  ];
  const selections = await vscode.window.showQuickPick(options, {
    placeHolder: 'Please choose the base components you would like to install:',
    canPickMany: true,
  });

  if (!selections) {
    // User canceled the prompt without making a selection
    console.log('User canceled the selection.');
    return;
  }

  try {
    const response = await fetch('https://potion-ui-nu.vercel.app/api/base.json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const components = await response.json();

    const workspaceRoot = getWorkspaceRoot();
    if (workspaceRoot === null) {
      return;
    }

    const baseDir = await findDirectory(workspaceRoot, 'base');

    if (!baseDir) {
      vscode.window.showErrorMessage('Base Directory not found, please create one and try again!');
      return;
    }

    for (const selectedOption of selections) {
      const component = components.find(
        (component: { name: string }) => component.name === selectedOption
      );
      if (component) {
        const fileName = `${component.component}.tsx`;
        const content = component.files;
        const filePath = path.join(baseDir, fileName);
        fs.writeFileSync(filePath, content);
        console.log('File created:', filePath);
      } else {
        console.error(`Component not found for option: ${selectedOption}`);
      }
    }
    vscode.window.showInformationMessage(`Components created`);
    return;
  } catch (error) {
    console.error('Error retrieving Components:', error);
  }
});
