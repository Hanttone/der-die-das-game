const path = require('path');

module.exports = {
  components: 'src/Components/**/[A-Z]*.js',
  defaultExample: true,
  moduleAliases: {
    'rsg-example': path.resolve(__dirname, 'src'),
  },
  theme: 'styleguide.theme.js',
  ignore: [
    'src/Components/SubmitScore/[A-Z]*.js',
    'src/Components/**/[A-Z]*.test.js',
  ],
};
