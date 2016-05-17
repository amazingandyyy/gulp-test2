'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var nodemon = require('gulp-nodemon');



// gulp.task    - define a task
// gulp.src     - (source) input files
// gulp.dest    - output files
// gulp.watch   - watch files/directories for changes
// *.pipe       - chain actions together


gulp.task('default', ['js', 'css', 'watch', 'serve']);

gulp.task('watch', ['watchJS', 'watchCSS'])

gulp.task('serve', function() {
    nodemon();
})


/////////////////////// JS ///////////////////////////
gulp.task('watchJS', function() {
    return gulp.watch('./client/js/**/*.js', ['js']);
})
gulp.task('js', function() {
    return gulp.src('./client/js/**/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./public/js'));

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
