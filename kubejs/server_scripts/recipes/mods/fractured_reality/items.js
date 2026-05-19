ServerEvents.recipes((event) => {
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "minecraft:ender_pearl",
      },
      {
        type: "neoforge:tag",
        amount: 500,
        tag: "c:honey",
      },
    ],
    results: [
      {
        id: "kubejs:honey_pearl",
      },
    ],
  });
});
