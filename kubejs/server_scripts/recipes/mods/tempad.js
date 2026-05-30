const tempadRecipeRemovals = [
  "tempad:time_steel_create",
  "tempad:time_steel_shaped",
  "tempad:chronon_battery",
  "tempad:workstation",
  "tempad:timedoor_projector",
  "tempad:chronon_cell",
  "tempad:chronomark",
  "tempad:timedoor_marker",
  "tempad:time_twister",
  "tempad:tempad",
];

const tempadShapedRecipes = [
  {
    output: "tempad:chronon_battery",
    pattern: ["ABA", "CDC", "ABA"],
    keys: {
      A: "minecraft:iron_ingot",
      B: "tempad:time_steel",
      C: "tempad:chronon_cell",
      D: "kubejs:fractured_shard",
    },
  },
  {
    output: "tempad:workstation",
    pattern: ["AA ", "BBB", "CDC"],
    keys: {
      A: "minecraft:tinted_glass",
      B: "createaddition:electrum_ingot",
      C: "tempad:time_steel",
      D: "kubejs:fractured_shard",
    },
  },
  {
    output: "tempad:chronon_cell",
    pattern: ["ABA", "CDC", "ABA"],
    keys: {
      A: "minecraft:iron_ingot",
      B: "createaddition:electrum_ingot",
      C: "minecraft:redstone",
      D: "kubejs:fractured_shard",
    },
  },
  {
    output: "tempad:timedoor_projector",
    pattern: ["AA ", "CDE", "BBB"],
    keys: {
      A: "createaddition:electrum_ingot",
      B: "minecraft:iron_block",
      C: "minecraft:tinted_glass",
      D: "kubejs:fractured_pearl",
      E: "tempad:chronon_cell",
    },
  },
  {
    output: "tempad:time_twister",
    pattern: ["AB ", "CDB", "AB "],
    keys: {
      A: "tempad:time_steel",
      B: "minecraft:tinted_glass",
      C: "tempad:chronon_battery",
      D: "kubejs:fractured_pearl",
    },
  },
  {
    output: "tempad:timedoor_marker",
    pattern: ["ABA", "ACA", "ADA"],
    keys: {
      A: "minecraft:iron_ingot",
      B: "minecraft:tinted_glass",
      C: "kubejs:fractured_pearl",
      D: "minecraft:iron_block",
    },
  },
  {
    output: "tempad:chronomark",
    pattern: ["ABA", "CEC", "ADA"],
    keys: {
      A: "tempad:time_steel",
      B: "minecraft:tinted_glass",
      E: "kubejs:fractured_pearl",
      D: "minecraft:iron_block",
      C: "minecraft:iron_ingot",
    },
  },
  {
    output: "tempad:tempad",
    pattern: ["AAA", "BCD", "EFE"],
    keys: {
      A: "minecraft:tinted_glass",
      B: "kubejs:fractured_shard",
      C: "kubejs:fractured_pearl",
      D: "create:rose_quartz_lamp",
      E: "tempad:time_steel",
      F: "tempad:chronon_battery",
    },
  },
];

ServerEvents.recipes((event) => {
  removeRecipes(event, tempadRecipeRemovals);
  event
    .custom({
      type: "oritech:atomic_forge",
      ingredients: [
        item("createaddition:electrum_ingot"),
        item("minecraft:netherite_ingot"),
        item("oritech:energite_ingot"),
      ],
      results: [
        {
          count: 1,
          id: "tempad:time_steel",
        },
      ],
      time: 200,
    })
    .id("kubejs:atomic_forge/time_steel");

  tempadShapedRecipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.keys);
  });
});
