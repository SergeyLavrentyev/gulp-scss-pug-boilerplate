const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const config = require('../config');

const images = () => {
  return src(config.src.images)
    .pipe(imagemin(
      [
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: true },
            { cleanupIDs: false }
          ]
        })
      ]))
    .pipe(dest(config.build.images));
};

module.exports = images;
