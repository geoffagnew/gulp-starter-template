# Front-end starter template
A simple front-end starter template built with gulp, browserify and watchify. Runs its own webserver through gulp-connect (with live reload).

## Requirements
* Node
* npm

## Start a new project with this template
From terminal, run:
```
npm install
```
To start the watch process and run your local server, run:
```
gulp
```
Be sure to adjust the *jsSources* variable in the gulp file before running _gulp_.

## Project structure
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

## To build files for production
From terminal, run this command:
```
gulp minify
```
This will package the js, css, html and img folder, optimize the assets and move them to the build/production directory.

## Dependencies
* gulp
* browserify
* watchify
* vinyl-source-stream
* gulp-sass
* gulp-util
* pump
* gulp-uglify
* gulp-connect
* gulp-htmlmin
* gulp-json-minify

## To do
- [ ] Install Babel
- [ ] Install ESlint
- [ ] Get gulp-sourcemaps working
