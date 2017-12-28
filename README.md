# Simple front-end workflow

### Project structure
* builds
  * development
    * css (built files)
    * images (source images)
    * js (built files)
    * index.html (source html)
  * production
* components
  * scripts (source js)
  * scss (source scss)
* gulpfile.js
* package.json

### To build files for production
From terminal, run this command:
```
NODE_ENV=production
```

### Dependencies
* gulp
* browserify
* watchify
* vinyl-source-stream
* gulp-sass
* gulp-util
* pump
* gulp-uglify
* gulp-connect
* (scss sourcemaps)
* (uglify css)
* (uglify html)
* (image compression)
