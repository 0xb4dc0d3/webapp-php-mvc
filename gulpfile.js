const gulp = require('gulp');
const sass = require('gulp-sass');

// Compile SASS
gulp.task('sass', function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("public/css"))
});

// Move JS Files to SRC

gulp.task('js', function(){
    return gulp.src(['node_modules/popper.js/dist/popper.js','node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest("public/js"))
});


// Watch SASS & supportsNativeMutationObserver
gulp.task('serve', ['sass'], function(){
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'public/scss/*.scss'], ['sass']);
});


// Move Font Awesome CSS Files
gulp.task('fa', function(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest("public/css"));
});



//Move Fonts folder to src
gulp.task('fonts', function(){
    return gulp.src(['node_modules/font-awesome/fonts/*'])
        .pipe(gulp.dest("public/fonts"));
});


gulp.task('default', ['js', 'serve', 'fa', 'fonts']);