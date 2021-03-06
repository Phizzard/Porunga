const path = require('path')

module.exports = {
  template: {
    favicon: 'images/porunga-close-icon.png',
  },
  assetsDir: 'images/',
  pagePerSection: false,
  theme: {
    borderRadius: 10,
    color: {
      base: '#333',
      light: '#767676',
      lightest: '#ccc',
      link: '#1673b1',
      linkHover: '#e90',
      focus: 'rgba(22, 115, 177, 0.25)',
      border: '#e8e8e8',
      name: '#690',
      type: '#905',
      error: '#c00',
      baseBackground: '#fff',
      codeBackground: '#f5f5f5',
      sidebarBackground: '#f5f5f5',
      ribbonBackground: '#e90',
      ribbonText: '#fff',
    },
  },
  sections: [
    {
      name: 'Introduction',
      content: 'src/docs/introduction.md',
    },
    {
      name: 'API Design',
      content: 'src/docs/API-design.md',
    },
    {
      name: 'Theming',
      content: 'src/docs/Theming.md',
    },
    {
      name: 'Components',
      components: 'src/components/*/index.{ts,tsx}',
      ignore: 'src/components/index.ts',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/components/Theme/Theme'),
  },
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    shouldExtractLiteralValuesFromEnum: true,
  }).parse,
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/constants.{js,jsx,ts,tsx}',
  ],
}
