var sumBotHeight = compose(
    reduce(add),
    pluck('height'),
    where({universe: "Star Wars"})
);

sumBotHeight(robots);
// => 2.63
