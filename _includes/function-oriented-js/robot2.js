_.chain(robots)
    .where({universe: "Star Wars"})
    .pluck('height')
    .reduce(function(memo, height) { return memo + height; })
    .value();
    
// => 2.63