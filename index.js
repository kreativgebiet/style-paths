var lib = require('bower-files')();
var path = require('path');
var stylePaths = module.exports = function(ext) {
  ext = typeof(ext) !== undefined ? a : ['scss', 'sass'];

  return lib.ext(ex).files.map(function(val) {
    return path.dirname(val);
  });
};
