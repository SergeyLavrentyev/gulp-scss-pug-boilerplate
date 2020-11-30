const gulp = require('gulp');
const html = require('./gulp/tasks/html');
const css = require('./gulp/tasks/css');
const script = require('./gulp/tasks/script');
const images = require('./gulp/tasks/images');
const fonts = require('./gulp/tasks/fonts');
const clean = require('./gulp/tasks/clean');
const server = require('./gulp/tasks/server');
const lintspaces = require('./gulp/tasks/lintspaces');

const dev = gulp.parallel(html, css, script, images, fonts);
const build = gulp.series(clean, dev);

module.exports.start = gulp.series(clean, dev, server);
module.exports.build = gulp.series(build);
module.exports.lintspaces = lintspaces;
