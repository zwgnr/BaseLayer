const fg = require('fast-glob');

export const findFile = async (rootDir: string, fileName: string): Promise<string | null> => {
  const paths = await fg(`${rootDir}/**/${fileName}`, {
    ignore: ['**/node_modules/**', '**/dist/**', '**/out/**'],
  });
  return paths.length > 0 ? paths[0] : null;
};
