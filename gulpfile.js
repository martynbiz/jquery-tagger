var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Task for compiling scripts, and minifying. Run with 'gulp js'
gulp.task('js', function() {

    return gulp.src('tagger.jquery.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', function() {
    gulp.watch(['tagger.jquery.js'], ['js']);
});
