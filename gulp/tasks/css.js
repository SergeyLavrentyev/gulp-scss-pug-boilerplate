const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const config = require('../config.js');

sass.compiler = require('node-sass');

const scss = () => {
  return src(config.src.scss.render)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCss({
      level: 2
    }))
    .pipe(dest(config.build.css));
  
};

module.exports = scss;
