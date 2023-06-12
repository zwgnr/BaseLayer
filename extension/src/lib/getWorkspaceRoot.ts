import * as vscode from 'vscode';

export const getWorkspaceRoot = () => {
  const workspaceRoot = vscode.workspace.workspaceFolders
    ? vscode.workspace.workspaceFolders[0].uri.fsPath
    : null;
  if (!workspaceRoot) {
    vscode.window.showErrorMessage(
      'No workspace folder open, please open a workspace and try again!'
    );
    return null;
  }
  return workspaceRoot;
};
