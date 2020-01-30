var gulp = require('gulp');
var del = require('del');
const zip = require('gulp-zip');

function clean(cb) {
    cb();
    del("./dist");
    del("./dist_beanstalk");
    del("./dist_beanstalk.zip");
}
function buildBeanstalk(cb) {
    // body omitted
    cb();
    gulp.src(['./dist/**/*']).pipe(gulp.dest('./dist_beanstalk/src/'));
    gulp.src(['./public/**/*']).pipe(gulp.dest('./dist_beanstalk/public/'));
    gulp.src(['./views/**/*']).pipe(gulp.dest('./dist_beanstalk/views/'));
    gulp.src(['./package.json']).pipe(gulp.dest('./dist_beanstalk/'));
}

function deploy(cb) {
    cb();
    gulp.src('./dist_beanstalk/**')
        .pipe(zip('dist_beanstalk.zip'))
        .pipe(gulp.dest('.'))

}

exports.clean = clean;
exports.build_beanstalk = buildBeanstalk;
exports.deploy = deploy;
exports.build = gulp.series(clean, buildBeanstalk);