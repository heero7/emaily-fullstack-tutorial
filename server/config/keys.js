// keys.js - figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
  // in production environment.. return the production keys
  module.exports = require('./prod');
} else {
  // development... return development keys
  module.exports = require('./dev');
}