/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "all",
  endOfLine: "lf",
  singleQuote: false,
  semi: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  pluginSearchDirs: false,
  // importOrder: ['react', '<THIRD_PARTY_MODULES>', '^/src', '^[@/*]', '^[./]'],
  // importOrderBuiltinModulesToTop: true,
  // importOrderCaseInsensitive: true,
  // importOrderParserPlugins: ['typescript', 'jsx'],
  // importOrderMergeDuplicateImports: true,
  // importOrderCombineTypeAndValueImports: true,
  // importOrderSeparation: true,
  // importOrderSortSpecifiers: true,
  tailwindFunctions: ["clsx", "cn", "cva", "tw"],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  astroAllowShorthand: true
};
