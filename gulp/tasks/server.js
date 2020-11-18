const { watch, series } = require('gulp');
const browserSync = require('browser-sync').create();
const html = require('./html');
const css = require('./css');
const script = require('./script');
const images = require('./images');
const fonts = require('./fonts');
const config = require('../config');

const reload = (done) => {
  browserSync.reload()
  done();
};

const stream = () => {
  watch(config.src.pug.watch, series(html, reload)),
  watch(config.src.scss.watch, series(css, reload)),
  watch(config.src.js, series(script, reload)),
  watch(config.src.images, series(images, reload)),
  watch(config.src.fonts, series(fonts, reload))
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: config.baseDir
    }
  });
  browserSync.reload(),
  stream();
};

module.exports = server;

