var trim = function (s) { return s.trim(); }
var toUpper = function(s) { return s.toUpperCase(); };

var prep = _.compose(encodeURI, toUpper, trim);
prep("  cat dog          ");
// => "CAT%20DOG"
