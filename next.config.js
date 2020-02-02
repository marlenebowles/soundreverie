// next.config.js
const withTM = require('next-transpile-modules')(['@computapars/*']); // pass the modules you would like to see transpiled

module.exports = withTM();
