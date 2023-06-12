module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
      rules: {},
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./utils/tsconfig.json', './web/tsconfig.json', './extension/tsconfig.json'],
      },
    },
    {
      files: ['./extension/**/*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.tsx'],
      excludedFiles: ['./web/src/ui/Solid/**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['react', 'react-hooks', '@typescript-eslint'],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./web/tsconfig.json'],
      },
      rules: {},
    },
    {
      files: ['./web/src/ui/Solid/**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['solid'],
      extends: ['plugin:solid/typescript', 'prettier'],
    },
    {
      files: ['*.astro'],
      extends: ['plugin:astro/recommended', 'prettier'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
