const mysticalAgricultureNewRecipes = [
  {
    outputs: [
      "mysticalagriculture:awakening_altar",
      "mysticalagriculture:awakening_pedestal",
    ],
    replacements: [
      ["minecraft:gold_ingot", "createaddition:electrum_ingot"],
      ["mysticalagriculture:soulstone", "ae2:sky_stone_block"],
      ["minecraft:orange_wool", "mysticalagriculture:supremium_ingot_block"],
    ],
  },
  {
    outputs: ["mysticalagriculture:essence_vessel"],
    replacements: [
      ["minecraft:gold_ingot", "createaddition:electrum_ingot"],
      ["mysticalagriculture:soulstone", "ae2:sky_stone_block"],
      [
        "#c:glass_blocks/colorless",
        "mysticalagriculture:supremium_gemstone_block",
      ],
    ],
  },
  {
    outputs: [
      "mysticalagriculture:infusion_altar",
      "mysticalagriculture:infusion_pedestal",
    ],
    replacements: [
      ["minecraft:gold_ingot", "createaddition:electrum_ingot"],
      ["minecraft:stone", "ae2:sky_stone_block"],
      ["minecraft:red_wool", "oritech:fluxite"],
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

ServerEvents.recipes((event) => {
  replaceInputFromRecipes(event, mysticalAgricultureNewRecipes);
});
