// declarations, dependencies
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gconcat = require('gulp-concat'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    sourcemaps = require('gulp-sourcemaps'),
    coffee = require('gulp-coffee');

// Js source files
var jsSources = [
  'components/scripts/rclick.js',
  'components/scripts/pixgrid.js',
  'components/scripts/tagline.js',
  'components/scripts/template.js',
];

// Coffee script processing
gulp.task('coffee', function() {
  gulp.src('components/coffee/tagline.coffee')
    .pipe(coffee({ bare: true })
      .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});

gulp.task('bundle', function() {
  return browserify(jsSources)
   .bundle()
   .pipe(source('bundled.js'))
   .pipe(gulp.dest('builds/development/js'));
});

gulp.task('default', ['bundle'], function() {
  return gulp.src([
    'builds/development/js/bundled.js'
  ])
  .pipe(gconcat('script.js'))
  .pipe(gulp.dest('builds/development/js'));
});


gulp.task('concat', function() {
  return gulp.src(jsSources)
    .pipe(gconcat('script.js'))
    .pipe(gulp.dest('builds/development/js'));
});
