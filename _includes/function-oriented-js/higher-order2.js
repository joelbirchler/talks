var tagger = function(name) {
    return function(value) {
        return '<' + name + '>' + value + '</' + name + '>';
    }
};