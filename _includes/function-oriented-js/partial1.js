var createTag = function(tagName, text) { /* ... */ };

var p = createTag.bind(null, "p");
p("Pork Vindaloo");
// => <p>PorkVindaloo</p>
