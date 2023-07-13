const vscode = require('vscode');
const { getWorkspaceRoot } = require('../lib/getWorkspaceRoot');
const { findDirectory } = require('../lib/findDirectory');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const tsMorph = require('ts-morph');
const Project = tsMorph.Project;
const project = new Project();

export const missingCommand = vscode.commands.registerCommand('extension.missing', async () => {
  const activeEditor = vscode.window.activeTextEditor;

  if (activeEditor) {
    const document = activeEditor.document;
    const text = document.getText();
    const potionModules: string[] = [];

    const sourceFile = project.createSourceFile('temp.ts', text);

    const importDeclarations = sourceFile.getImportDeclarations();

    for (const declaration of importDeclarations) {
      const moduleSpecifier = declaration.getModuleSpecifierValue();
      if (moduleSpecifier.startsWith('@/components/base/')) {
        const moduleName = moduleSpecifier.replace('@/components/base/', '');
        potionModules.push(moduleName);
      }
    }

    // Delete the source file after using
    sourceFile.delete();

    // Process modules after traversal
    for (const moduleName of potionModules) {
      const workspaceRoot = getWorkspaceRoot();
      if (workspaceRoot === null) {
        return;
      }

      const baseDir = await findDirectory(workspaceRoot, 'base');

      if (!baseDir) {
        vscode.window.showErrorMessage(
          'Base Directory not found, please create one and try again!'
        );
        return;
      }

      const modulePath = path.join(baseDir, `${moduleName}.tsx`);

      const response = await fetch('https://potion-ui-nu.vercel.app/api/base.json');
      const json: Array<{ component: string; files: string }> = await response.json();
      const module = json.find((m) => m.component === moduleName);

      if (module) {
        // Check if file already exists and contents are the same
        if (fs.existsSync(modulePath)) {
          const existingContent = fs.readFileSync(modulePath, 'utf8');
          if (existingContent === module.files) {
            // Skip this file
            continue;
          }
        }

        // Write new content to file
        fs.writeFileSync(modulePath, module.files);
        vscode.window.showInformationMessage(`Created missing module: ${moduleName}`);
      } else {
        vscode.window.showInformationMessage(`Module ${moduleName} not found in the Base API.`);
      }
    }
  }
});
