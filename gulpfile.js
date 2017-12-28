// declarations, dependencies
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    sourcemaps = require('gulp-sourcemaps'),
    pump = require('pump'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');
    // coffee = require('gulp-coffee');

// Js source files
var jsSources = [
  'components/scripts/rclick.js',
  'components/scripts/pixgrid.js',
  'components/scripts/tagline.js',
  'components/scripts/template.js',
  'components/scripts/testing.js'
];

// Coffee script processing
// gulp.task('coffee', function() {
//   gulp.src('components/coffee/tagline.coffee')
//     .pipe(coffee({ bare: true })
//       .on('error', gutil.log))
//     .pipe(gulp.dest('components/scripts'))
// });

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
      .pipe(gulp.dest('builds/development/js'));
  }
  return rebundle();
});

// Uglifyjs task
gulp.task('uglifyJs', function () {
  pump([
    gulp.src('builds/development/js/script.js'),
    uglify(),
    gulp.dest('builds/production/js')
  ]);
});

// Scss task
gulp.task('sass', function () {
  return gulp.src('components/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('builds/development/css'));
});

// Watch task for js and scss
gulp.task('default', ['watchJs'], function() {
  gulp.watch(['components/scss/*.scss'], ['sass']);
});

