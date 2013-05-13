basePath = '..';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'components/jquery/jquery.js',
  'components/angular/angular.js',
  'components/angular-mocks/angular-mocks.js',
  'tests/libraries/mocker.js',
  '*.js',
  'tests/*.js'
];

autoWatch = false;

browsers = ['Chrome', 'Firefox', 'IE', 'Opera'];

singleRun = true;