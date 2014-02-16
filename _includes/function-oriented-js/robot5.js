var sumBotHeight = compose(
    sum,
    curry(pluck, 'height'),
    curry(where, {universe: "Star Wars"})
);

sumBotHeight(robots);