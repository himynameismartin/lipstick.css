var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

gulp.task('less', function() {
    return gulp.src('lipstick.less')
        .pipe(less())
        .pipe(gulp.dest('./'));
});

gulp.task('minify-css', ['less'], function() {
    return gulp.src('lipstick.css')
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['less', 'minify-css']);
