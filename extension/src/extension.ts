import * as vscode from 'vscode';

import { initCommand } from './commands/init';
import { addCommand } from './commands/add';
import { missingCommand } from './commands/missing';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(initCommand, addCommand, missingCommand);
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate() {}
