var tagger = function(name) {
    return function(value) {
        return '<' + name + '>' + value + '</' + name + '>';
    }
};

var p = tagger('p');
p('A way out west there was a fella...');