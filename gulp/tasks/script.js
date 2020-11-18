const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const config = require('../config');

const script = () => {
  return src(config.src.js)
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(
      uglify({ toplevel: true }).on("error", function () {
        this.emit("end");
      })
    )
    .pipe(dest(config.build.js));
};

module.exports = script;
