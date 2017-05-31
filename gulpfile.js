'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var concat = require('gulp-concat');

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch', function () {
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/module/**/*.html', browserSync.reload);
  gulp.watch('app/*.js', browserSync.reload);
  gulp.watch('app/module/**/*.js', function(){
    runSequence('scripts');
  });
  gulp.watch('app/css/**/*.css', function(){
    runSequence('csss');
  });
  gulp.watch('app/css/**/*.css', browserSync.reload);
  gulp.watch('app/*.xml', browserSync.reload);
});

gulp.task('scripts', function() {
  return gulp.src('./app/module/**/*.js')
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./app/'));
});

gulp.task('csss', function() {
  return gulp.src('./app/css/**/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./app/'));
});


gulp.task('default', function (callback) {
  runSequence(['browserSync', 'scripts', 'csss'], 'watch',
    callback
  )
});