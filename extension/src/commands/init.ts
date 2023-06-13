import * as vscode from 'vscode';
import * as util from 'util';
import { findDirectory } from '../lib/findDirectory';
import { getWorkspaceRoot } from '../lib/getWorkspaceRoot';
import { detectPackageManager } from '../lib/detectPackageManager';
import { findFile } from '../lib/findFile';
const fs = require('fs');
const path = require('path');
const exec = util.promisify(require('child_process').exec);

export const initCommand = vscode.commands.registerCommand('extension.init', async () => {
  const workspaceRoot = getWorkspaceRoot();
  if (workspaceRoot === null) {
    return;
  }
  const projectRootInput = await vscode.window.showInputBox({
    placeHolder: 'Where is the folder you would like to init Potion in?',
  });

  const projectRoot = `${workspaceRoot}/${projectRootInput}`;
  console.log(projectRoot);

  //pre checks

  const packageManager = detectPackageManager(projectRoot);

  if (!packageManager) {
    vscode.window.showErrorMessage(
      'Could not detect package manager, please ensure your project is initialized and try again!'
    );
    return;
  }

  let tailwindConfigPath = path.join(projectRoot, 'tailwind.config.js');

  if (!fs.existsSync(tailwindConfigPath)) {
    tailwindConfigPath = path.join(projectRoot, 'tailwind.config.cjs');
  }

  if (!fs.existsSync(tailwindConfigPath)) {
    tailwindConfigPath = path.join(projectRoot, 'tailwind.config.ts');
  }

  if (!fs.existsSync(tailwindConfigPath)) {
    vscode.window.showErrorMessage(
      'Could not detect tailwind.config.{.js,.cjs,.ts}. Please make sure tailwind is set up in the directory you selected and try again!'
    );
    return;
  }

  const options = ['react', 'solid', 'vue'];
  const framework = await vscode.window.showQuickPick(options, {
    placeHolder: 'What framework are you using?',
  });
  if (!framework) {
    // User canceled the prompt without making a selection
    return;
  }

  const message = `You are about to do the following:\n
  Install @ark-ui/${framework}, lucide-${framework}, tailwind-variants, and
  overwrite your global.css, and modify you tailwind.config files.
Would you like to proceed?`;

  const title = `Using ${packageManager}, installing @ark-ui/${framework} lucide-${framework} tailwind-variants.`;

  const answer = await vscode.window.showWarningMessage(message, 'Yes', 'No');

  const setGlobalStyles = async () => {
    try {
      const presets = require(path.join(__dirname, '../templates/presets'));
      const stylesPresetContent = presets.stylesPreset;

      let stylesFilePath = await findFile(projectRoot, 'global.css');
      if (stylesFilePath !== null) {
        fs.writeFileSync(stylesFilePath, stylesPresetContent);
      }
      if (stylesFilePath === null) {
        stylesFilePath = await findFile(projectRoot, 'globals.css');
        if (stylesFilePath !== null) {
          fs.writeFileSync(stylesFilePath, stylesPresetContent);
        } else {
          // If 'styles' directory not found, create it under projectRoot and write the file there
          const globalCssPath = path.join(projectRoot, 'global.css');
          fs.writeFileSync(globalCssPath, stylesPresetContent);
        }
      }
    } catch (err) {
      vscode.window.showErrorMessage(`Error setting GlobalCSS: ${err}`);
      return;
    }
  };

  async function copyPreset() {
    const destinationPresetPath = path.join(projectRoot, 'tailwindPreset.js');
    const presets = require(path.join(__dirname, '../templates/presets'));
    const tailwindPreset = presets.tailwindPreset;

    fs.writeFileSync(destinationPresetPath, tailwindPreset);
  }

  async function updateTailwindConfig() {
    // Insert presets property
    let tailwindConfig = fs.readFileSync(tailwindConfigPath, 'utf-8');

    // Check the file type
    if (path.extname(tailwindConfigPath) === '.ts') {
      // If the file is TypeScript
      const regex = /(export default \{)([\s\S]*?)(\})/;
      const replacement = `$1\n  presets: [require('./tailwindPreset.js')],$2$3`;
      tailwindConfig = tailwindConfig.replace(regex, replacement);
    } else {
      // If the file is JavaScript
      const regex = /(module\.exports = \{)([\s\S]*?)(\})/;
      const replacement = `$1\n  presets: [require('./tailwindPreset.js')],$2$3`;
      tailwindConfig = tailwindConfig.replace(regex, replacement);
    }

    function updateTailwindContentArray(tailwindConfigContent: string | string[]) {
      const contentPathToAdd = "'./potions/**/*.{ts,tsx}', ";
      const contentIndex = tailwindConfigContent.indexOf('content: [');
      if (contentIndex === -1) {
        vscode.window.showErrorMessage('Could not find "content" array in the configuration file');
        return;
      }

      const updatedConfigContent = [
        tailwindConfigContent.slice(0, contentIndex + 10),
        contentPathToAdd,
        tailwindConfigContent.slice(contentIndex + 10),
      ].join('');

      return updatedConfigContent;
    }

    if (fs.existsSync(path.join(projectRoot, 'next.config.js'))) {
      tailwindConfig = updateTailwindContentArray(tailwindConfig);
    }

    fs.writeFileSync(tailwindConfigPath, tailwindConfig);
  }

  const createPotionDir = async () => {
    const isAppDir = await findDirectory(projectRoot, 'app');
    const srcDir = await findDirectory(projectRoot, 'src');

    let potionsDir;

    if (srcDir) {
      // Create potions directory inside the 'src' directory if it doesn't already exist
      potionsDir = path.join(projectRoot, 'src', 'potions');
      if (!fs.existsSync(potionsDir)) {
        fs.mkdirSync(potionsDir);
      }
    } else if (isAppDir) {
      if (fs.existsSync(path.join(projectRoot, 'next.config.js'))) {
        // Create potions directory at the root level if 'next.config.js' exists
        potionsDir = path.join(projectRoot, 'potions');
        if (!fs.existsSync(potionsDir)) {
          fs.mkdirSync(potionsDir);
        }
      } else {
        // Create potions directory inside the 'app' directory if it doesn't already exist
        potionsDir = path.join(projectRoot, 'app', 'potions');
        if (!fs.existsSync(potionsDir)) {
          fs.mkdirSync(potionsDir);
        }
      }
    } else {
      // Create potions directory at the root level if neither 'app' nor 'src' directories exist
      potionsDir = path.join(projectRoot, 'potions');
      if (!fs.existsSync(potionsDir)) {
        fs.mkdirSync(potionsDir);
      }
    }
  };

  if (answer === 'Yes') {
    try {
      createPotionDir();
      setGlobalStyles();
      copyPreset();
      updateTailwindConfig();
      await vscode.window.withProgress(
        {
          location: vscode.ProgressLocation.Notification,
          title: title,
          cancellable: true,
        },
        async () => {
          if (packageManager === 'npm') {
            await exec(`npm add @ark-ui/${framework} lucide-${framework} tailwind-variants`, {
              cwd: projectRoot,
            });
          } else {
            await exec(
              `${packageManager} add @ark-ui/${framework} lucide-${framework} tailwind-variants`,
              {
                cwd: projectRoot,
              }
            );
          }
          vscode.window.showInformationMessage('Packages Installed.');
          return;
        }
      );
      vscode.window.showInformationMessage('PotionUI Ready!');
    } catch (err) {
      vscode.window.showErrorMessage(`Error executing command: ${err}`);
      return;
    }
  } else if (answer === 'No') {
    vscode.window.showErrorMessage('You chose not to continue.');
    return;
  }
});
