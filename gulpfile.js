var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var plumber = require('gulp-plumber');

/* Static Server + watching scss/html files */
gulp.task('serve', ['sass'], function() {
  browserSync.init({
      server: "./"
  });

  gulp.watch("sass/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

/* Compile sass into CSS & auto-inject into browsers */
gulp.task('sass', function() {
  gulp.src("sass/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['serve']);