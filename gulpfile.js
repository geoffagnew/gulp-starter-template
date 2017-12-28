// declarations, dependencies
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee');

// Js source files
var jsSources = [
  'components/scripts/rclick.js',
  'components/scripts/pixgrid.js',
  'components/scripts/tagline.js',
  'components/scripts/template.js',
  'components/scripts/testing.js'
];

// Coffee script processing
gulp.task('coffee', function() {
  gulp.src('components/coffee/tagline.coffee')
    .pipe(coffee({ bare: true })
      .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});

// Browserify task
gulp.task('bundle', function() {
  return browserify(jsSources)
   .bundle()
   .pipe(source('script.js'))
   .pipe(gulp.dest('builds/development/js'));
});

// Uglifyjs task
// gulp.task('uglifyJs', function() {
//   gulp.src('builds/development/js/script.js')
//   uglify()
//   gulp.dest('builds/production');
// });

// Scss task
gulp.task('sass', function () {
  return gulp.src('components/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('builds/development/css'));
});

gulp.task('default', function() {
  gulp.watch(['components/scripts/*.js'], ['bundle']);
  gulp.watch(['components/scss/*.scss'], ['sass']);
});
