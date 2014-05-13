var createTag = function(tagName, text) { /* ... */ };

var p = _.partial(createTag, "p");
p("Pork Vindaloo");
// => <p>Pork Vindaloo</p>

var vindalooer = _.partial(createTag, _, "Pork Vindaloo Zomg!");
vindalooer("h1");
// => <h1>Pork Vindaloo Zomg!</h1>
