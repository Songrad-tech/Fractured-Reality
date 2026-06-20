const mysticalAgricultureNewRecipes = [
  {
    outputs: [
      "mysticalagriculture:awakening_altar",
      "mysticalagriculture:awakening_pedestal",
    ],
    replacements: [
      ["minecraft:gold_ingot", "createaddition:electrum_ingot"],
      ["mysticalagriculture:soulstone", "ae2:sky_stone_block"],
      ["minecraft:orange_wool", "mysticalagriculture:supremium_ingot"],
    ],
  },
  {
    outputs: ["mysticalagriculture:essence_vessel"],
    replacements: [
      ["minecraft:gold_ingot", "createaddition:electrum_ingot"],
      ["mysticalagriculture:soulstone", "ae2:sky_stone_block"],
      [
        "#c:glass_blocks/colorless",
        "mysticalagriculture:supremium_gemstone",
      ],
    ],
  },
  {
    outputs: ["mysticalagriculture:infusion_altar"],
    replacements: [
      ["minecraft:gold_ingot", "createaddition:electrum_ingot"],
      ["minecraft:stone", "ae2:sky_stone_block"],
      ["minecraft:red_wool", "ae2:singularity"],
    ],
  },
  {
    outputs: ["mysticalagriculture:infusion_pedestal"],
    replacements: [
      ["minecraft:gold_ingot", "createaddition:electrum_ingot"],
      ["minecraft:stone", "ae2:sky_stone_block"],
      ["minecraft:red_wool", "oritech:fluxite_block"],
    ],
  },
  {
    outputs: ["mysticalagriculture:master_infusion_crystal"],
    replacements: [
      [
        "mysticalagriculture:supremium_gemstone",
        "mysticalagriculture:supremium_ingot",
      ],
      [
        "mysticalagriculture:prosperity_shard",
        "ae2:charged_certus_quartz_crystal",
      ],
    ],
  },
  {
    outputs: ["mysticalagriculture:infusion_crystal"],
    replacements: [
      ["minecraft:diamond", "oritech:adamant_ingot"],
      [
        "mysticalagriculture:prosperity_shard",
        "ae2:charged_certus_quartz_crystal",
      ],
      [
        "mysticalagriculture:inferium_essence",
        "illagerinvasion:primal_essence",
      ],
    ],
  },
];

const mysticalagricultureShapedRecipes = [
  {
    output: Item.of("oritech:energite_ingot", 4),
    pattern: ["AAA", "A A", "AAA"],
    keys: {
      A: "mysticalagriculture:energite_essence",
    },
  },
  {
    output: "oritech:duratium_ingot",
    pattern: ["AAA", "A A", "AAA"],
    keys: {
      A: "mysticalagriculture:duratium_essence",
    },
  },
  {
    output: Item.of("oritech:adamant_ingot", 2),
    pattern: ["AAA", "A A", "AAA"],
    keys: {
      A: "mysticalagriculture:adamant_essence",
    },
  },
  {
    output: Item.of("undergarden:cloggrum_ingot", 6),
    pattern: ["AAA", "A A", "AAA"],
    keys: {
      A: "mysticalagriculture:cloggrum_essence",
    },
  },
  {
    output: Item.of("undergarden:froststeel_ingot", 4),
    pattern: ["AAA", "A A", "AAA"],
    keys: {
      A: "mysticalagriculture:froststeel_essence",
    },
  },
  {
    output: "minecraft:echo_shard",
    pattern: ["  A", " A ", "A  "],
    keys: {
      A: "mysticalagriculture:warden_essence",
    },
  },
  {
    output: "deeperdarker:warden_carapace",
    pattern: [" BA", "BAB", "AB "],
    keys: {
      A: "mysticalagriculture:warden_essence",
      B: "mysticalagriculture:skeleton_essence",
    },
  },
  {
    output: "deeperdarker:heart_of_the_deep",
    pattern: ["ABA", "AAA", "BAB"],
    keys: {
      A: "mysticalagriculture:warden_essence",
      B: "mysticalagriculture:skeleton_essence",
    },
  },
  {
    output: Item.of("undergarden:regalium_crystal", 4),
    pattern: ["AAA", "A A", "AAA"],
    keys: {
      A: "mysticalagriculture:regalium_essence",
    },
  },
  {
    output: Item.of("undergarden:utherium_crystal"),
    pattern: ["AAA", "A A", "AAA"],
    keys: {
      A: "mysticalagriculture:utherium_essence",
    },
  },
  {
    output: Item.of("undergarden:rogdorium"),
    pattern: ["AAA", "A A", "AAA"],
    keys: {
      A: "mysticalagriculture:rogdorium_essence",
    },
  },
  {
    output: Item.of("tempad:time_steel"),
    pattern: ["AAA", "AAA", "AAA"],
    keys: {
      A: "mysticalagriculture:time_steel_essence",
    },
  },
  {
    output: Item.of("kubejs:fractured_shard", 10),
    pattern: ["AAA", "A A", "AAA"],
    keys: {
      A: "mysticalagriculture:fractured_shared_essence",
    },
  },
];

ServerEvents.recipes((event) => {
  replaceInputFromRecipes(event, mysticalAgricultureNewRecipes);

  mysticalagricultureShapedRecipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.keys);
  });
});
