const gulp = require('gulp')
// //task 创建任务
gulp.task('hello',function () {
    console.log("hello world");
})
// //拷贝index.html页面
gulp.task('copy-html',function(){
    return gulp.src('index.html')
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload())
})
gulp.task('copy-lib',function(){
    return gulp.src('libs')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})
// //拷贝图片
gulp.task('image',function(){
    // return gulp.src('images/*.jpg')
    // .pipe(gulp.dest('dist/images'))
    //拷贝单格式图片
    // return gulp.src('images/*.{jpg,png}')
    // .pipe(gulp.dest('dist/images'))
    //拷贝多格式
    // return gulp.src('images/*/*')
    // .pipe(gulp.dest('dist/images'))
    //拷贝文件夹内的图片
    return gulp.src('images/**/*')
    .pipe(gulp.dest('dist/images'))
    //拷贝所有图片包含文件夹的图片
})
// //数据源文件，放在一个目录下就ok
gulp.task('data',function(){
    return gulp.src(['json/*.json','xml/*.xml','!xml/3.xml'])
    .pipe(gulp.dest('dist/data'))
})
// //一次行执行多个任务
gulp.task("build",['copy-html','image','data'],function(){
    console.log('编译成功');
    
})
// //gulp监听操作 只要代码发生变化，会自动更新
gulp.task('watch',function(){
    gulp.watch('index.html',['copy-html'])
    gulp.watch("images/**/*", ["images"]);
    gulp.watch(["json/*.json", "xml/*.xml", "!xml/3.xml"], ["data"]);
    gulp.watch("stylesheet/index.scss", ['scss']);
    gulp.watch(["javascript1/show.js", "javascript2/hello.js"], ['scripts']);
})

//gulp真正强大的是插件的添加
//gulp-minify-css 压缩css代码
//gulp-rename 重命名文件
//scss/sass插件
const scss = require('gulp-sass')
const minifyCss=require('gulp-minify-css')
const rename =require('gulp-rename')
gulp.task('scss',function(){
    gulp.src('stle/style.scss')
    .pipe(scss())
    .pipe(gulp.dest('dist/css'))
    .pipe(minifyCss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
    })
//将多个js文件合成一个
//gulp-uglify文件压缩
// concat插件
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("scripts", function(){
    return gulp.src(["javascript1/show.js", "javascript2/hello.js"])
    .pipe(concat("index.js"))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename('index.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload())
})
//在当前目录启动临时服务器 gulp-connect插件
const connect = require('gulp-connect')
gulp.task('server',function () {
    connect.server({
        root:'dist',
        port:7777,
        livereload:true
    })
})
//同时启动监听和服务器 ，同时刷新
// .pipe(connect.reload()) 需要在每个任务后加刷新
//
gulp.task('default',['watch','server']);
