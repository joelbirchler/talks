var createTag = function(tagName) {
    return function (text) {
        var el = document.createElement(tagName);
        var textNode = document.createTextNode(text);
        el.appendChild(textNode);
        return el;
    };
};

var p = createTag("p");
p("panang"); //=> <p>panang</p>
p("mussamun"); //=> <p>mussamun</p>
