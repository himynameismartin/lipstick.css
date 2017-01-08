var gulp = require('gulp');
var less = require('gulp-less');
var cssbeautify = require('gulp-cssbeautify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

gulp.task('less', function() {
    return gulp.src('src/lipstick.less')
        .pipe(less())
        .pipe(gulp.dest('dist'));
});

gulp.task('beautify-css', ['less'], function() {
    return gulp.src('dist/lipstick.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', ['less', 'beautify-css'], function() {
    return gulp.src('dist/lipstick.css')
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['less', 'beautify-css', 'minify-css']);
