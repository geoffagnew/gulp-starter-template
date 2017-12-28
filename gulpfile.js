// declarations, dependencies
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    sourcemaps = require('gulp-sourcemaps'),
    pump = require('pump'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

// Js source files
var jsSources = [
  'components/scripts/rclick.js',
  'components/scripts/pixgrid.js',
  'components/scripts/tagline.js',
  'components/scripts/template.js',
  'components/scripts/testing.js'
];

// --------------------- Development tasks

// Browserify and watchify task
gulp.task('watchJs', function() {
  var b = browserify({
    entries: [jsSources],
    cache: {},
    packageCache: {},
    plugin: [watchify]
  });

  b.on('update', rebundle);

  function rebundle() {
    return b.bundle()
      .pipe(source('script.js'))
      .pipe(gulp.dest('builds/development/js'))
      .pipe(connect.reload());
  }
  return rebundle();
});

// Scss task
gulp.task('sass', function () {
  return gulp.src('components/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('builds/development/css'))
    .pipe(connect.reload());
});

// Local server
gulp.task('connect', function() {
  connect.server({
    root: 'builds/development/',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('builds/development/*.html')
    .pipe(connect.reload());
});

// --------------------- Production build tasks

// Uglifyjs task
gulp.task('uglifyJs', function () {
  pump([
    gulp.src('builds/development/js/script.js'),
    uglify(),
    gulp.dest('builds/production/js')
  ]);
});

// --------------------- Watch tasks

gulp.task('watch', function() {
  gulp.watch(['builds/development/*.html'], ['html']);
  gulp.watch(['components/scss/*.scss'], ['sass']);
});

// Watch task for js, scss and html reload
gulp.task('default', ['connect', 'watch', 'watchJs']);


