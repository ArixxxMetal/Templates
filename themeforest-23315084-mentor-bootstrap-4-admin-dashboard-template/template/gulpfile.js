var  gulp = require('gulp'),
     $ = require('gulp-load-plugins')(),
     plumber = require('gulp-plumber');
     sass = require('gulp-sass');
     jsMinify = require('gulp-minify');
     cssMinify = require('gulp-clean-css');
     prettyHtml = require('gulp-pretty-html');
     rename = require("gulp-rename");
     imagemin = require('gulp-imagemin');
     sync = $.sync(gulp),
     browserSync = require('browser-sync'),
     reload = browserSync.reload,
     pluginerror = $.util.pluginerror;
     args = require('yargs').argv;
     merge = require('merge-stream');
     del = require('del');


// Error handler
function handleError(err) {
    logMessage(err.toString());
    this.emit('end');
}

// log to console using
function logMessage(message) {
    $.util.log($.util.colors.green(message));
}

// source paths
var srcPaths = {
    html: 'src/html/*.html',
    images: 'src/images/**/*',
    fonts: 'src/fonts/**/*',
    styles: 'src/scss/style.scss',
    scripts: ['src/js/components/*.js','src/js/app/*.js']
}
// temp paths
var temPaths = {
    html: 'temp/',
    styles: {
            main: 'vendors.css',
            dir: 'temp/assets/css'
    },
    scripts: {
            main: 'app.js',
            dir: 'temp/assets/js'
        },
    images: 'temp/assets/img/',
    fonts: 'temp/assets/fonts/',
    vendors: {
            main: 'vendors.js',
            dir: 'temp/assets/js'
    },
}

// build paths
var buildPaths = {
    html: 'dist/',
    fonts: 'dist/assets/fonts',
    styles: 'dist/assets/',
    scripts: 'dist/assets/',
    images: 'dist/assets/img/'
}

var concat = require('./vendors.json');

// HTML copy to temp folder
gulp.task('html', function() {
    logMessage('Copying html..');
    return gulp.src(srcPaths.html)
        .pipe(gulp.dest(temPaths.html))
});

// Images copy to temp folder
gulp.task('images', function() {
    logMessage('Copying images..');
    return gulp.src(srcPaths.images)
        .pipe(gulp.dest(temPaths.images))
});

// Fonts copy to temp folder
gulp.task('fonts', function() {
    logMessage('Copying fonts..');
    return gulp.src(srcPaths.fonts)
        .pipe(gulp.dest(temPaths.fonts))
});

// Styles copy and compile to temp folder
gulp.task('styles', function() {
    logMessage('Building styles..');
    return gulp.src(srcPaths.styles)
        .pipe(plumber())
        .pipe(sass())
        .on("error", handleError)
        .pipe(gulp.dest(temPaths.styles.dir))
        
});

// scripts copy and compile to temp folder
gulp.task('scripts', function() {
    logMessage('Building scripts..');
    return gulp.src(srcPaths.scripts)
        .pipe(plumber())
        .pipe($.jsvalidate())
        .on('error', handleError)
        .pipe($.concat(temPaths.scripts.main))
        .on("error", handleError)
        .pipe(gulp.dest(temPaths.scripts.dir))
});

// merging vendor files
gulp.task('vendors:merge:scripts', function() {
    logMessage('Merging vendors styles ans scripts..');
    return gulp.src(concat.scripts)
        .pipe(plumber())
        .pipe($.jsvalidate())
        .on('error', handleError)
        .pipe($.concat(temPaths.vendors.main))
        .on("error", handleError)
        .pipe(gulp.dest(temPaths.vendors.dir))
});

// merging vendors styles
gulp.task('vendors:merge:styles', function() {
    logMessage('Merging vendors styles..');
    return gulp.src(concat.styles)
        .pipe(plumber())
        .on('error', handleError)
        .pipe($.concat(temPaths.styles.main))
        .on("error", handleError)
        .pipe(gulp.dest(temPaths.styles.dir))
});


// Serve files with auto reaload
gulp.task('browsersync', function() {
    logMessage('Starting BrowserSync..');
    browserSync({
        notify: false,
        server: {
            baseDir: 'temp/'
        }
    });
});

// building files
gulp.task('mentor:build', function() {
    logMessage('Building Files..');
    var html = gulp.src(temPaths.html + '*.html')
        .pipe(prettyHtml({
            indent_size: 4,
            indent_char: ' ',
            unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']
        }))
        .pipe(gulp.dest(buildPaths.html))

    var images = gulp.src(temPaths.images + '**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(buildPaths.images))

    var fonts = gulp.src(temPaths.fonts + '**/*')
        .pipe(gulp.dest(buildPaths.fonts))

    var styles = gulp.src(temPaths.styles.dir + '**/*.css')
        .pipe(plumber())
        .pipe(cssMinify())
        .pipe(gulp.dest(buildPaths.styles))


    var scripts = gulp.src(temPaths.scripts.dir + '**/*' + '.js')
        .pipe(plumber())
        .pipe(jsMinify())
        .pipe(gulp.dest(buildPaths.scripts))

});


// watch files
gulp.task('watch', function(){
    gulp.watch('temp/**/*.html', ['html']);
    gulp.watch('temp/assets/css/style.css', ['styles']);
});

// copy files to temp folder and serve files
gulp.task('serve', ['html','images','fonts','styles','scripts','vendors:merge:scripts','vendors:merge:styles','browsersync','watch']);

// minify all css and js
gulp.task('build', ['mentor:build']);

