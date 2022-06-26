// This is config file for UAT environment
// Its exmaple of how u can override parent config file by providing new properties in this file
// U don't need to type up entire config file. Merge both files and override certain properties when needed

const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');

exports.config = merge(wdioConf.config, {
  //baseUrl: 'https://www.rahulshettyacademy.com', // <-- thats on purpose to see tests fail
  waitForTimeout: 5000,

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    grep: 'Smoke'
  }
});

// It seems to be working but if I don't provide browser.url() in test case, it seems to fail test
// So base url is launching from this file but I HAVE to provide additional url from test case

// Also, in parent config, do not specify any specs, keep it all.
// Then additional grep property from mochaOpts: kicks in
// You can provide different tag names. Also, u can still provide normal command from cli
