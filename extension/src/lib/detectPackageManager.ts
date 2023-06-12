const fs = require('fs');
const path = require('path');

export const detectPackageManager = (projectRoot: string) => {
  if (fs.existsSync(path.join(projectRoot, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  }
  if (fs.existsSync(path.join(projectRoot, 'yarn.lock'))) {
    return 'yarn';
  }
  if (fs.existsSync(path.join(projectRoot, 'package-lock.json'))) {
    return 'npm';
  }
  return null;
};
