_.chain(robots)
    .where({universe: "Star Wars"})
    .pluck('height')
    .reduce(add)
    .value();

// => 2.63