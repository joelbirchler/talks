var add = function(x) {
    return function(y) {
        return x + y;
    };
};

add(2)(3); // => 5
