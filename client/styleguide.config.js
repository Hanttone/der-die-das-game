const path = require('path');

module.exports = {
  components: 'src/Components/**/[A-Z]*.js',
  title: 'Der, die & das - StyleGuide',
  defaultExample: true,
  moduleAliases: {
    'rsg-example': path.resolve(__dirname, 'src'),
  },
  theme: 'styleguide.theme.js',
  ignore: ['src/Components/**/[A-Z]*.test.js'],
};
