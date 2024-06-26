const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: { '@modules': path.resolve(__dirname, 'src/modules/') },
  };

  return config;
};
