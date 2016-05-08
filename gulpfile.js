/**
 * Created by apple on 16/5/7.
 */
/**
 * Created by apple on 16/4/1.
 */


// 引入 gulp
var gulp = require('gulp');

// 引入组件

var sass = require('gulp-sass');




// 编译Sass
gulp.task('sass', function() {
    gulp.src('./statics/css/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('./statics/css'));
});


// 默认任务
gulp.task('default', function(){

    gulp.run('sass');
    gulp.watch('./statics/css/index.scss', function(){
        gulp.run('sass');
    });


});
