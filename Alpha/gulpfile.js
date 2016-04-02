var sass = require('gulp-sass');
var gulp = require('gulp');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');

gulp.task('scssToCss', function () {
    return gulp.src('./src/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest/css/'));
});
gulp.task('watchCss', function () {
  gulp.watch('./src/*.scss', ['scssToCss']);
});
//默认任务
gulp.task('default', function(){
  gulp.run('scssToCss');
  gulp.run('watchCss');
});
