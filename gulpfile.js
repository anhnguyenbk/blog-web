const gulp = require('gulp');
const {series} = require('gulp');
const del = require('del');
const zip = require('gulp-zip');
const shell = require('gulp-shell');
const rename =   require('gulp-rename');
const eb = require('gulp-elastic-beanstalk-deploy');
const merge = require('merge-stream');

function clean() {
    return del(["./dist", "./dist_beanstalk", "./dist_beanstalk.zip"]);
}

const build = shell.task('npm run-script build');

function dist() {
    var stream1 = gulp.src(['./dist/**/*']).pipe(gulp.dest('./dist_beanstalk/src/'));
    var stream2 = gulp.src(['./public/**/*']).pipe(gulp.dest('./dist_beanstalk/public/'));
    var stream3 = gulp.src(['./views/**/*']).pipe(gulp.dest('./dist_beanstalk/views/'));
    var stream4 = gulp.src(['./package.json']).pipe(gulp.dest('./dist_beanstalk/'));
    var stream5 = gulp.src(['./.env.production'])
        .pipe(rename('.env'))
        .pipe(gulp.dest('./dist_beanstalk/'));

    return merge(stream1, stream2, stream3, stream4, stream5);
}

function distZip() {
    return merge(gulp.src(['./dist_beanstalk/**', './dist_beanstalk/.env'])
        .pipe(zip('dist_beanstalk.zip'))
        .pipe(gulp.dest('.')))
}

function deploy(cb) {
    eb({
        region: 'ap-southeast-1',
        s3Bucket: {
            bucket: 'elasticbeanstalk-ap-southeast-1-705179926964',    // default: applicationName
        },
        applicationName:'blog-web',
        environmentName: 'tobi-blog',
        versionLabel: '1.2.7',
        sourceBundle: './dist_beanstalk.zip',
        description: 'AnhngBlog v1.2.7'
    }, cb);
}

exports.clean = clean;
exports.build = build;
exports.dist = dist;
exports.distZip = distZip;
exports.deploy = deploy;

exports.publish = series(clean, build, dist, distZip, deploy);