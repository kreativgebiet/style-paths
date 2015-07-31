var lib = require('bower-files')();
var path = require('path');
var stylePaths = module.exports = function(ext) {
  ext = typeof(ext) !== undefined ? ext : ['scss', 'sass'];

  return lib.ext(ext).files.map(function(val) {
    return path.dirname(val);
  });
};
