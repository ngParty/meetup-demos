// Karma configuration
// Generated on Sun Dec 13 2015 20:34:20 GMT+0100 (CET)

const path = require('path')

const webpackConfig = require('./webpack.config');
const entry = path.resolve(webpackConfig.context, 'tests.entry.ts');


const preprocessors = {
  [entry]: [
    'webpack',
    'sourcemap'
  ]
};
const plugins = [
  require('karma-mocha'),
  require('karma-chai'),
  require('karma-chrome-launcher'),
  require('karma-webpack'),
  require('karma-mocha-reporter'),
  require('karma-sourcemap-loader')
  // require('karma-coverage')
 
];
const frameworks = [
  'mocha',
  'chai'
];

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: frameworks,


    // list of files / patterns to load in the browser
    files: [entry],
    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true // prevent console spamming when running in Karma!
    },


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: preprocessors,


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    
    // Timeout for capturing a browser (in ms)
    captureTimeout: 6000,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    plugins: plugins
  })
}
