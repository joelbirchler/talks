var tagger = function(name) {
    return function(value) {
        return '<name>value</name>'.replace(/name/g, name).replace(/value/g, value);
    }
};

var p = tagger('p');
p('A way out west there was a fella...');