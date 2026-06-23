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
  event
    .custom({
      type: "mysticalagriculture:infusion",
      input: item("oritech:gold_gem"),
      ingredients: [
        item("kubejs:fractured_shard"),
        item("oritech:energite_dust"),
        item("kubejs:fractured_shard"),
        item("oritech:energite_dust"),
        item("kubejs:fractured_shard"),
        item("oritech:energite_dust"),
        item("kubejs:fractured_shard"),
        item("oritech:energite_dust"),
      ],
      result: {
        count: 1,
        id: "kubejs:fractured_coin",
      },
    })
    .id("kubejs:infusion/fractured_coin");

  event.shaped("kubejs:fractured_wallet", ["ABA", "ACA", "BBB"], {
    A: "kubejs:fractured_shard",
    B: "minecraft:leather",
    C: "#c:chests/wooden",
  });
});
