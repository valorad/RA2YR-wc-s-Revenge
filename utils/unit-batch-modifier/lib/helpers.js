const { resolve } = require('path');

const root = (path = '') => {
  return resolve('.', path);
};

module.exports= {
  root
}
