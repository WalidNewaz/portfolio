// Compile sass files

// Combile and concat javascript

// minify the js files

// Watch

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('minify-css', function(){
  return gulp.src('css/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`Original: ${details.name}: ${details.stats.originalSize}`);
      console.log(`Minified: ${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(gulp.dest('dest/css'));
});

gulp.task('scripts', function(){
  return gulp.src('js/app/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

gulp.task('watch', function(){
  gulp.watch('js/app/*.js', ['scripts']);
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('css/*.css', ['minify-css']);
});
