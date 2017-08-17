const gulp = require('gulp');
const chalk = require('chalk');
const install = require('gulp-install')
const shell = require('gulp-shell')

gulp.task('setup', () => {
 return gulp.src(['./lib/package.json', 'example/package.json'])
   .pipe(install('npm install '))
})

gulp.task('publish:major', shell.task([
  'npm version major'
]))

gulp.task('publish:minor', shell.task([
  'npm version minor'
]))

gulp.task('publish:patch', shell.task([
  'npm version patch'
]))

gulp.task('help', () => {
  console.log('\n-------------------')
  console.log(chalk.green('setup'), 'setup project init environment')

  console.log(chalk.green('publish:major'), 'publish as a major version to npm')
  console.log(chalk.green('publish:minor'), 'publish as a major version to npm')
  console.log(chalk.green('publish:patch'), 'publish as a patch version to npm')

  console.log('-------------------\n')
})
gulp.task('default', ['help']);
