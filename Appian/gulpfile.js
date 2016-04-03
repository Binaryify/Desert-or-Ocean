var sass = require('gulp-sass');
var gulp = require('gulp');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var fs=require('fs');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var formatDateTime = function() {
  var date=new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  var minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  return y + '-' + m + '-' + d ;
};
  var now=formatDateTime();
  // 静态服务器 + 监听 scss/html 文件
  gulp.task('serve', ['scssToCss'], function() {
      browserSync.init({
          server: "./"+now
      });
      gulp.watch("./"+now+"/src/sass/*.scss", ['scssToCss']);
      gulp.watch("./"+now+"/*.html").on('change', reload);
  });

  console.log(now);
  fs.stat('./'+now, function(err, stat) {
      if(err == null) {
          if(stat.isDirectory()) {
              console.log('文件夹存在');
          } else if(stat.isFile()) {
              console.log('文件存在');
          } else {
              console.log('路径存在，但既不是文件，也不是文件夹');
              //输出路径对象信息
              console.log(stat);
          }
      } else if(err.code == 'ENOENT') {
          console.log(err.name);
          console.log('路径不存在');
          fs.mkdir(now)
      } else {
          console.log('错误：' + err);
      }
  });

  gulp.task('scssToCss', function () {
      return gulp.src('./'+now+'/src/sass/*.scss')
          .pipe(sourcemaps.init())
          .pipe(sass().on('error', sass.logError))
          .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('./'+now+'/dest/css/'))
          .pipe(reload({stream: true}));
  });
  gulp.task('default', ['serve']); //默认任务
