var tag = function(name, value) {
    return '<name>value</name>'.replace(/name/g, name).replace(/value/g, value);
};

tag('h1', 'Tumbling Tumbleweeds');