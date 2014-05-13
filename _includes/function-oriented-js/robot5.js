var sumBotHeight = _.compose(
    heights => _.reduce(heights, add),
    bots => _.pluck(bots, 'height'),
    bots => _.where(bots, {universe: "Star Wars"})
);

sumBotHeight(robots);
// => 2.63
