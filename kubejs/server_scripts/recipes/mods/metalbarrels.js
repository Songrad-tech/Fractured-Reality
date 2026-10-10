const METAL_BARREL_ID = "metalbarrels";

const mettalBarrelsShapedRecipes = [
  {
    output: "metalbarrels:copper_barrel",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "minecraft:barrel",
      B: "minecraft:copper_ingot",
    },
  },
  {
    output: "metalbarrels:iron_barrel",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "minecraft:barrel",
      B: "minecraft:iron_ingot",
    },
  },
  {
    output: "metalbarrels:iron_barrel",
    pattern: [" B ", "BAB", " B "],
    keys: {
      A: "metalbarrels:copper_barrel",
      B: "minecraft:iron_ingot",
    },
  },
  {
    output: "metalbarrels:gold_barrel",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "metalbarrels:iron_barrel",
      B: "minecraft:gold_ingot",
    },
  },
  {
    output: "metalbarrels:diamond_barrel",
    pattern: ["CCC", "BAB", "CCC"],
    keys: {
      A: "metalbarrels:gold_barrel",
      B: "minecraft:diamond",
      C: "minecraft:glass",
    },
  },
  {
    output: "metalbarrels:obsidian_barrel",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "metalbarrels:diamond_barrel",
      B: "#c:obsidians",
    },
  },
  {
    output: "metalbarrels:crystal_barrel",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "metalbarrels:diamond_barrel",
      B: "minecraft:glass",
    },
  },
  // wood upgrade
  {
    output: "metalbarrels:wood_to_copper",
    pattern: ["BBB", "AAA", "BBB"],
    keys: {
      A: "#minecraft:planks",
      B: "minecraft:copper_ingot",
    },
  },
  {
    output: "metalbarrels:wood_to_iron",
    pattern: ["BBB", "AAA", "BBB"],
    keys: {
      A: "#minecraft:planks",
      B: "minecraft:iron_ingot",
    },
  },
  {
    output: "metalbarrels:wood_to_iron",
    pattern: [" B ", "BAB", " B "],
    keys: {
      A: "metalbarrels:wood_to_copper",
      B: "minecraft:iron_ingot",
    },
  },
  {
    output: "metalbarrels:wood_to_gold",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "metalbarrels:wood_to_iron",
      B: "minecraft:gold_ingot",
    },
  },
  {
    output: "metalbarrels:wood_to_diamond",
    pattern: ["CCC", "BAB", "CCC"],
    keys: {
      A: "metalbarrels:wood_to_gold",
      B: "minecraft:diamond",
      C: "minecraft:glass",
    },
  },
  {
    output: "metalbarrels:wood_to_obsidian",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "metalbarrels:wood_to_diamond",
      B: "#c:obsidians",
    },
  },
  {
    output: "metalbarrels:wood_to_crystal",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "metalbarrels:wood_to_diamond",
      B: "minecraft:glass",
    },
  },
  // Copper upgrade
  {
    output: "metalbarrels:copper_to_iron",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "minecraft:copper_ingot",
      B: "minecraft:iron_ingot",
    },
  },
  {
    output: "metalbarrels:copper_to_gold",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "metalbarrels:copper_to_iron",
      B: "minecraft:gold_ingot",
    },
  },
  {
    output: "metalbarrels:copper_to_diamond",
    pattern: ["CCC", "BAB", "CCC"],
    keys: {
      A: "metalbarrels:copper_to_gold",
      B: "minecraft:diamond",
      C: "minecraft:glass",
    },
  },
  {
    output: "metalbarrels:copper_to_obsidian",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "metalbarrels:copper_to_diamond",
      B: "#c:obsidians",
    },
  },
  {
    output: "metalbarrels:copper_to_crystal",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "metalbarrels:copper_to_diamond",
      B: "minecraft:glass",
    },
  },
  // iron upgrade
  {
    output: "metalbarrels:iron_to_gold",
    pattern: ["BBB", "AAA", "BBB"],
    keys: {
      A: "minecraft:iron_ingot",
      B: "minecraft:gold_ingot",
    },
  },
  {
    output: "metalbarrels:iron_to_diamond",
    pattern: ["CCC", "BAB", "CCC"],
    keys: {
      A: "metalbarrels:iron_to_gold",
      B: "minecraft:diamond",
      C: "minecraft:glass",
    },
  },
  {
    output: "metalbarrels:iron_to_obsidian",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "metalbarrels:iron_to_diamond",
      B: "#c:obsidians",
    },
  },
  {
    output: "metalbarrels:iron_to_crystal",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "metalbarrels:iron_to_diamond",
      B: "minecraft:glass",
    },
  },

  // gold upgrade
  {
    output: "metalbarrels:gold_to_diamond",
    pattern: ["CBC", "CAC", "CBC"],
    keys: {
      A: "minecraft:gold_ingot",
      B: "minecraft:diamond",
      C: "minecraft:glass",
    },
  },
  {
    output: "metalbarrels:gold_to_obsidian",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "metalbarrels:gold_to_diamond",
      B: "#c:obsidians",
    },
  },
  {
    output: "metalbarrels:gold_to_crystal",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "metalbarrels:gold_to_diamond",
      B: "minecraft:glass",
    },
  },
  // diamond upgrade
  {
    output: "metalbarrels:diamond_to_obsidian",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "minecraft:diamond",
      B: "#c:obsidians",
    },
  },
  {
    output: "metalbarrels:diamond_to_crystal",
    pattern: ["BBB", "BAB", "BBB"],
    keys: {
      A: "minecraft:diamond",
      B: "minecraft:glass",
    },
  },
];

const materials = ["wood", "copper", "iron", "gold", "diamond"];

ServerEvents.recipes((event) => {
  event.remove({ mod: METAL_BARREL_ID });

  mettalBarrelsShapedRecipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.keys);
  });

  event.smithing(
    "metalbarrels:netherite_barrel",
    "minecraft:diamond",
    "metalbarrels:obsidian_barrel",
    "minecraft:netherite_ingot",
  );

  materials.forEach((material) => {
    // Upgrade vers Netherite
    event.smithing(
      `metalbarrels:${material}_to_netherite`,
      "minecraft:diamond",
      `metalbarrels:${material}_to_obsidian`,
      "minecraft:netherite_ingot",
    );
  });

  // Obsidian vers Netherite
  event.smithing(
    "metalbarrels:obsidian_to_netherite",
    "minecraft:diamond",
    "minecraft:obsidian",
    "minecraft:netherite_ingot",
  );
});
