const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const pplumber = require('gulp-plumber');
const config = require('../config.js');

sass.compiler = require('node-sass');

const scss = () => {
  return src(config.src.scss.render)
    .pipe(sourcemaps.init())
    .pipe(pplumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss({
      level: 2
    }))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(config.build.css));

};

module.exports = scss;
