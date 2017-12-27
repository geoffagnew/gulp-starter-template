var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gconcat = require('gulp-concat'),
    browserify = require('browserify'),
    sourcemaps = require('gulp-sourcemaps'),
    coffee = require('gulp-coffee');

var jsSources = [
  'components/scripts/rclick.js',
  'components/scripts/pixgrid.js',
  'components/scripts/tagline.js',
  'components/scripts/template.js',
];

// gulp.task('coffee', function() {
//   gulp.src('components/coffee/tagline.coffee')
//     .pipe(coffee({ bare: true })
//       .on('error', gutil.log))
//     .pipe(gulp.dest('components/scripts'))
// });

gulp.task('javascript', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './entry.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('concat', function() {
  return gulp.src(jsSources)
    .pipe(gconcat('script.js'))
    .pipe(gulp.dest('builds/development/js'));
});
