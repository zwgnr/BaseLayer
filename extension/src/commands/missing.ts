import * as vscode from 'vscode';
import { getWorkspaceRoot } from '../lib/getWorkspaceRoot';
import { findDirectory } from '../lib/findDirectory';
import * as fs from 'fs';
import * as path from 'path';

const fetch = require('node-fetch');

export const missingCommand = vscode.commands.registerCommand(
  'extension.missing',
  async () => {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
      const document = activeEditor.document;
      const text = document.getText();

      const importRegEx = /import .+ from '@potions\/(.+)';/gm;
      let match;

      while ((match = importRegEx.exec(text)) !== null) {
        const moduleName = match[1];

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

        const modulePath = path.join(potionsDir, `${moduleName}.ts`);

        // Check if module file exists, if not create it
        if (!fs.existsSync(modulePath)) {
          const response = await fetch('https://potion-ui-nu.vercel.app/api/potions.json');
          const json = await response.json();
          const module = json.find((m: { potion: string }) => m.potion === moduleName);

          if (module) {
            fs.writeFileSync(modulePath, module.files);
            vscode.window.showInformationMessage(`Created missing module: ${moduleName}`);
          } else {
            vscode.window.showInformationMessage(
              `Module ${moduleName} not found in the Potions API.`
            );
          }
        }
      }
    }
  }
);
