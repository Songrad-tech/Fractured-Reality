ServerEvents.recipes((event) => {
  const fracturedToolKey = (baseTool) => ({
    A: item("kubejs:fractured_ingot"),
    B: item("oritech:duratium_block"),
    C: item("the_bumblezone:royal_jelly_block"),
    D: item(baseTool),
    E: item("kubejs:nether_star_block"),
    F: item("minecraft:heavy_core"),
    G: item("ae2:singularity"),
  });

  const fracturedToolRecipes = [
    {
      id: "fractured_shovel",
      baseTool: "mysticalagriculture:awakened_supremium_shovel",
      pattern: [
        " AAA ",
        "ACFCA",
        "AEDEA",
        "AAGAA",
        "  B  ",
        "  B  ",
        "  B  ",
        "  B  ",
        "  A  ",
      ],
    },
    {
      id: "fractured_axe",
      baseTool: "mysticalagriculture:awakened_supremium_axe",
      pattern: [
        " A    ",
        "AEAA  ",
        "ACFBA ",
        "ADCGFA",
        "ACFBA ",
        "AEAB  ",
        " A B  ",
        "   B  ",
        "   A  ",
      ],
    },
    {
      id: "fractured_pickaxe",
      baseTool: "mysticalagriculture:awakened_supremium_pickaxe",
      pattern: [
        "  AAAAA  ",
        " ACEDECA ",
        "AFAAGAAFA",
        "AA  B  AA",
        "A   B   A",
        "    B    ",
        "    B    ",
        "    B    ",
        "    A    ",
      ],
    },
  ];

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

  fracturedToolRecipes.forEach((recipe) => {
    mechanicalCrafting(
      event,
      {
        key: fracturedToolKey(recipe.baseTool),
        pattern: recipe.pattern,
        result: `kubejs:${recipe.id}`,
      },
      `kubejs:mechanical_crafting/${recipe.id}`,
    );
  });
});
