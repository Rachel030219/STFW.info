var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var webserver = require('gulp-webserver');
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
gulp.task('webserver', function () {
    gulp.src('./public/')
        .pipe(webserver({
            host: 'localhost',
            livereload: false,
            directoryListing: false,
            open: 'index.html',
            port: 8080
        }));
});
gulp.task('build', gulp.series('minify-html'));
gulp.task('default', gulp.series('build', 'webserver'));