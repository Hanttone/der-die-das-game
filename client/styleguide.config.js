const path = require('path');

module.exports = {
  components: 'src/Components/**/[A-Z]*.js',
  defaultExample: true,
  moduleAliases: {
    'rsg-example': path.resolve(__dirname, 'src'),
  },
  theme: 'styleguide.theme.js',
  styleguideComponents: {
    Wrapper: path.join(
      __dirname,
      'src/Services/AppThemeProvider.js'
    ),
  },
  ignore: [
    'src/Components/SubmitScore/[A-Z]*.js',
    'src/Components/Lives/[A-Z]*.js',
    'src/Components/NavItem/[A-Z]*.js',
    'src/Components/**/[A-Z]*.test.js',
  ],
};
