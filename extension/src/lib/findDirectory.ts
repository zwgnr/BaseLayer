const fg = require('fast-glob');

export const findDirectory = async (rootDir: string, dirName: string): Promise<string | null> => {
  const paths = await fg(`${rootDir}/**/${dirName}`, {
    onlyDirectories: true,
    ignore: ['**/node_modules/**', '**/dist/**', '**/out/**'],
  });
  return paths.length > 0 ? paths[0] : null;
};
