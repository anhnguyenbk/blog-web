const gulp = require('gulp');
const {series} = require('gulp');
const del = require('del');
const zip = require('gulp-zip');
const shell = require('gulp-shell');
const rename =   require('gulp-rename');

function clean() {
    return del(["./dist", "./dist_beanstalk", "./dist_beanstalk.zip"]);
}

const build = shell.task('npm run-script build');

function dist(cb) {
    gulp.src(['./dist/**/*']).pipe(gulp.dest('./dist_beanstalk/src/'));
    gulp.src(['./public/**/*']).pipe(gulp.dest('./dist_beanstalk/public/'));
    gulp.src(['./views/**/*']).pipe(gulp.dest('./dist_beanstalk/views/'));
    gulp.src(['./package.json']).pipe(gulp.dest('./dist_beanstalk/'));
    gulp.src(['./.env.production'])
        .pipe(rename('.env'))
        .pipe(gulp.dest('./dist_beanstalk/'));
    cb();
}

function distZip(cb) {
    gulp.src(['./dist_beanstalk/**', './dist_beanstalk/.env'])
        .pipe(zip('dist_beanstalk.zip'))
        .pipe(gulp.dest('.'));
    cb();
}

exports.clean = clean;
exports.build = build;
exports.dist = dist;
exports.distZip = distZip;
exports.publish = series(clean, build, dist, distZip);