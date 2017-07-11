const gulp = require('gulp');
const shell = require('gulp-shell');
const gulpSequence = require('gulp-sequence');

gulp.task('tsc', shell.task(['tsc']));

gulp.task('package', [], () => {
  gulp.src(['./package.json']).pipe(gulp.dest('./build'));
});

gulp.task('default', gulpSequence('tsc', 'package'));
