var sum = _.partial(_.reduce, _, add);
sum([1, 2, 3, 4]); // => 10