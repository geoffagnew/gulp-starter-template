var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gconcat = require('gulp-concat'),
    coffee = require('gulp-coffee');

var jsSources = [
  'components/scripts/rclick.js',
  'components/scripts/pixgrid.js',
  'components/scripts/tagline.js',
  'components/scripts/template.js',
];

gulp.task('coffee', function() {
  gulp.src('components/coffee/tagline.coffee')
    .pipe(coffee({ bare: true })
      .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});

gulp.task('concat', function() {
  return gulp.src(jsSources)
    .pipe(gconcat('script.js'))
    .pipe(gulp.dest('builds/development/js'));
});
