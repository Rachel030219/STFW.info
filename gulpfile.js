var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var webserver = require('gulp-webserver');
var uncss = require('gulp-uncss');
gulp.task('minify-html', function () {
    return gulp.src('source/index.html')
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            collapseWhitespace: true,
        }))
        .pipe(htmlclean())
        .pipe(gulp.dest('public'))
});
gulp.task('uncss', function () {
    return gulp.src('./source/css/mdui.min.css')
        .pipe(uncss({
            html: ['public/index.html']
        }))
        .pipe(gulp.dest('public/css'));
});
gulp.task('webserver', function () {
    gulp.src('./public/')
        .pipe(webserver({
            host: 'localhost',
            livereload: false,
            directoryListing: true,
            open: '/index.html',
            port: 8080
        }));
});
gulp.task('default', [
    'minify-html',
    'webserver'
]);