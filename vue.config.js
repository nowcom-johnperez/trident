const config = require('@rancher/shell/vue.config');

module.exports = config(__dirname, {
  excludes: ['idp'],
  // excludes: ['fleet', 'example']
});
