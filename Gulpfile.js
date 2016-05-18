'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');


// gulp.task    - define a task
// gulp.src     - (source) input files
// gulp.dest    - output files
// gulp.watch   - watch files/directories for changes
// *.pipe       - chain actions together


gulp.task('default', ['js', 'css', 'watch', 'serve']);

gulp.task('watch', ['watchJS', 'watchCSS'])

gulp.task('serve', function() {
    // ignore front-end stuff
    nodemon({
        ignore: ['client', 'public', 'Gulpfile.js']
    });
})


/////////////////////// JS ///////////////////////////
gulp.task('watchJS', function() {
    return gulp.watch('./client/js/**/*.js', ['js']);
})
gulp.task('js', ['cleanJS'], function() {
    return gulp.src('./client/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.min.js'))
        .pipe(ngAnnotate())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/js'));
})
gulp.task('cleanJS', function() {
    return del('./public/js');
})

/////////////////////// CSS ///////////////////////////
gulp.task('watchCSS', function() {
    return gulp.watch('./client/css/**/*.css', ['css']);
})
gulp.task('css', ['cleanCSS'], function() {
    return gulp.src('./client/css/**/*.css')
        .pipe(gulp.dest('./public/css'));
})
gulp.task('cleanCSS', function() {
    return del('./public/css');
})
