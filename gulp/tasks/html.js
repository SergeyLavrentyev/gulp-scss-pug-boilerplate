const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const prettifyHtml = require('gulp-html-prettify');
const htmlValidator = require('gulp-w3c-html-validator');
const config = require('../config');

const html = () => {
  return src(config.src.pug.render)
    .pipe(plumber())
    .pipe(pug({
      basedir: './src/',
      filename: config.src.pug.render
    }))
    .pipe(prettifyHtml({
      indent_char: ' ',
      indent_size: 2
    }))
    .pipe(htmlValidator())
    .pipe(dest(config.build.html));
};

module.exports = html;
