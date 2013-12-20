var keyMap = function(func, list) {
    var obj = {};
    list.forEach(function(element) { obj[element] = func(element); });
    return obj;
};

var html = keyMap(tagger, ['h1', 'h2', 'p']);
html.h2('fella I want to tell you about');