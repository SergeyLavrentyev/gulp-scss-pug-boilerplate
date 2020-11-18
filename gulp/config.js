module.exports = {
  src: {
    pug: {
      watch: './src/**/*.pug',
      render: './src/views/*.pug'
    },
    scss: {
      watch: './src/**/*.scss',
      render: ['./src/styles/*.scss', './src/views/includes/common.scss']
    },
    js: './src/js/*.js',
    images: './src/static/images/*',
    fonts: './src/static/fonts/*'
  },
  build: {
    html: './build/',
    css: './build/styles',
    js: './build/js',
    images: './build/static/images',
    fonts: './build/static/fonts',
  },
  baseDir: './build'
}

