const { src, dest } = require('gulp');
const config = require('../config');

const fonts = () => {
  return src(config.src.fonts)
    .pipe(dest(config.build.fonts));
};

module.exports = fonts;
