'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./assets/scss/screen.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', function() {
  gulp.watch('./assets/scss/*.scss', ['sass']);
});