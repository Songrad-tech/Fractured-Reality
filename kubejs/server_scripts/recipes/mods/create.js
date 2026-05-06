const createRecipeRemovals = [
  "create:crafting/materials/andesite_alloy",
  "create:mixing/andesite_alloy",
  "createaddition:compat/ae2/charged_certus_quartz",
  "create:crafting/kinetics/mechanical_saw",
  "create:crafting/kinetics/mechanical_drill",
  "sliceanddice:slicer",
  "createaddition:crafting/rolling_mill",
  "rechiseledcreate:mechanical_chisel",
  "create:crafting/kinetics/deployer",
  "create:crafting/kinetics/encased_fan",
  "create:crafting/kinetics/portable_storage_interface",
  "create:crafting/kinetics/mechanical_press",
  "create:crafting/kinetics/mechanical_mixer",
  "create:crafting/kinetics/millstone",
  "create:crafting/kinetics/portable_fluid_interface",
  "create:crafting/kinetics/spout",
  "create:crafting/appliances/copper_backtank",
  "create:crafting/kinetics/item_drain",
  "create:crafting/kinetics/hose_pulley",
  "sliceanddice:sprinkler",
  "create:crafting/kinetics/steam_engine",
  "create:crafting/kinetics/mechanical_arm",
  "create:crafting/kinetics/mechanical_crafter",
  "create:crafting/kinetics/elevator_pulley",
  "createaddition:crafting/portable_energy_interface",
  "create:crafting/kinetics/rotation_speed_controller",
];

const createNewRecipes = [
  {
    outputs: ["create:brass_hand"],
    replacements: [["create:brass_sheet", "create:golden_sheet"]],
  },
];

const shapedRecipes = [
  {
    output: "create:drill_head",
    pattern: ["   ", " A ", "ABA"],
    keys: {
      A: "create:iron_sheet",
      B: "create:andesite_alloy",
    },
  },
  {
    output: "create:saw_blade",
    pattern: ["A A", " B ", "A A"],
    keys: {
      A: "create:iron_sheet",
      B: "create:andesite_alloy",
    },
  },
];

const andesiteSmithingRecipes = [
  ["create:mechanical_saw", "create:shaft", "create:saw_blade"],
  ["create:mechanical_drill", "create:shaft", "create:drill_head"],
  ["create:mechanical_mixer", "create:cogwheel", "create:whisk"],
  ["create:mechanical_press", "create:shaft", "minecraft:iron_block"],
  ["create:portable_storage_interface", "create:shaft", "create:chute"],
  ["create:encased_fan", "create:shaft", "create:propeller"],
  ["create:deployer", "create:shaft", "create:brass_hand"],
  ["sliceanddice:slicer", "create:cogwheel", "#c:tools/knife"],
  ["createaddition:rolling_mill", "create:shaft", "create:shaft"],
  ["rechiseledcreate:mechanical_chisel", "create:shaft", "rechiseled:chisel"],
  ["create:millstone", "create:cogwheel", "#c:stones"],
];

const copperSmithingRecipes = [
  ["create:portable_fluid_interface", "create:chute"],
  ["create:spout", "minecraft:dried_kelp"],
  ["create:copper_backtank", "minecraft:copper_block"],
  ["create:item_drain", "minecraft:iron_bars"],
  ["create:hose_pulley", "minecraft:dried_kelp_block"],
  ["sliceanddice:sprinkler", "create:fluid_pipe"],
  ["create:steam_engine", "create:shaft"],
];

const brassSmithingRecipes = [
  ["create:mechanical_arm", "create:precision_mechanism", "create:brass_hand"],
  [
    "create:mechanical_crafter",
    "create:electron_tube",
    "minecraft:crafting_table",
  ],
  [
    "create:rotation_speed_controller",
    "create:precision_mechanism",
    "create:large_cogwheel",
  ],
  ["create:elevator_pulley", "create:shaft", "minecraft:dried_kelp_block"],
  [
    "createaddition:portable_energy_interface",
    "createaddition:gold_spool",
    "create:chute",
  ],
];

ServerEvents.recipes((event) => {
  removeRecipes(event, createRecipeRemovals);
  replaceInputFromRecipes(event, createNewRecipes);

  shapedRecipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.keys);
  });

  andesiteSmithingRecipes.forEach(([output, base, addition]) => {
    event.smithing(output, base, "kubejs:andesite_core", addition);
  });

  copperSmithingRecipes.forEach(([output, addition]) => {
    event.smithing(output, "create:fluid_pipe", "kubejs:copper_core", addition);
  });

  brassSmithingRecipes.forEach(([output, base, addition]) => {
    event.smithing(output, base, "kubejs:brass_core", addition);
  });
});
