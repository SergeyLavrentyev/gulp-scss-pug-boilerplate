const { src } = require('gulp');
const lintSpaces = require('gulp-lintspaces');
const config = require('../config.js');

const lintspaces = () => {
  return src([
      '*.json',
      '*.md',
      './gulpfile.js/**/*.js',
      `${config.src.pug.watch}`,
      `${config.src.scss.watch}`,
      `${config.src.js}`,
      `${config.src.fonts}`
    ])
    .pipe(lintSpaces({ editorconfig: '.editorconfig' }))
    .pipe(lintSpaces.reporter());
}

module.exports = lintspaces;
