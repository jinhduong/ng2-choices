const gulp = require('gulp');
const shell = require('gulp-shell');
const gulpSequence = require('gulp-sequence');
const del = require('del');

gulp.task('tsc', shell.task(['tsc']));

gulp.task('package', [], () => {
  gulp.src(['./package.json']).pipe(gulp.dest('./build'));
  gulp.src(['./ext_libs/**']).pipe(gulp.dest('./build/ext_libs'));
});

gulp.task('clear', [], () => {
  del(['build']);
});

gulp.task('default', gulpSequence('clear', 'tsc', 'package'));
