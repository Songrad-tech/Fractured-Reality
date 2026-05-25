const oritechMachineShapedRecipes = [
  {
    output: "oritech:assembler_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "minecraft:copper_ingot",
      B: "create:mechanical_crafter",
      C: "oritech:adamant_ingot",
      D: "oritech:motor",
      E: "kubejs:electrum_core",
    },
  },
  {
    output: "oritech:foundry_block",
    pattern: ["AAA", "ABA", "CDC"],
    keys: {
      A: "minecraft:copper_ingot",
      B: "oritech:motor",
      C: "createaddition:electrum_ingot",
      D: "kubejs:electrum_core",
    },
  },
  {
    output: "oritech:centrifuge_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "minecraft:glass_bottle",
      B: "oritech:motor",
      C: "#c:ingots/steel",
      D: "oritech:processing_unit",
      E: "kubejs:electrum_core",
    },
  },
  {
    output: "oritech:atomic_forge_block",
    pattern: ["ABA", "CDC", "EEE"],
    keys: {
      A: "oritech:flux_gate",
      B: "oritech:energite_ingot",
      C: "oritech:plastic_sheet",
      D: "kubejs:electrum_core",
      E: "create:mechanical_crafter",
    },
  },
  {
    output: "oritech:pump_block",
    pattern: ["AAA", "ABA", "CDC"],
    keys: {
      A: "minecraft:copper_ingot",
      B: "oritech:motor",
      C: "#c:silicon",
      D: "kubejs:electrum_core",
    },
  },
  {
    output: "oritech:pulverizer_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "minecraft:iron_ingot",
      B: "create:crushing_wheel",
      C: "oritech:nickel_ingot",
      D: "oritech:motor",
      E: "kubejs:electrum_core",
    },
  },
  {
    output: "oritech:basic_generator_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "oritech:nickel_ingot",
      B: "minecraft:furnace",
      C: "minecraft:copper_ingot",
      D: "oritech:magnetic_coil",
      E: "kubejs:electrum_core",
    },
  },
  {
    output: "oritech:fragment_forge_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "oritech:plastic_sheet",
      B: "oritech:pulverizer_block",
      C: "oritech:flux_gate",
      D: "oritech:motor",
      E: "kubejs:electrum_core",
    },
  },
  {
    output: "oritech:laser_arm_block",
    pattern: ["ABA", "CDC", "EEE"],
    keys: {
      A: "oritech:flux_gate",
      B: "oritech:enderic_lens",
      C: "oritech:motor",
      D: "kubejs:electrum_core",
      E: "createaddition:electrum_ingot",
    },
  },
  {
    output: "oritech:placer_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "minecraft:copper_ingot",
      B: "oritech:processing_unit",
      C: "create:deployer",
      D: "oritech:motor",
      E: "kubejs:electrum_core",
    },
  },
  {
    output: "oritech:destroyer_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "minecraft:copper_ingot",
      B: "create:mechanical_drill",
      C: "createaddition:electrum_ingot",
      D: "oritech:motor",
      E: "kubejs:electrum_core",
    },
  },
  {
    output: "oritech:treefeller_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "minecraft:copper_ingot",
      B: "create:mechanical_saw",
      C: "createaddition:electrum_ingot",
      D: "oritech:motor",
      E: "kubejs:electrum_core",
    },
  },
  {
    output: "oritech:fertilizer_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "minecraft:copper_ingot",
      B: "#c:silicon",
      C: "sliceanddice:sprinkler",
      D: "oritech:motor",
      E: "kubejs:electrum_core",
    },
  },
  {
    output: "oritech:accelerator_ring",
    pattern: [" A ", "ABA", "CDC"],
    keys: {
      A: "oritech:duratium_ingot",
      B: "kubejs:electrum_core",
      C: "oritech:industrial_glass_block",
      D: "oritech:superconductor",
    },
  },
  {
    output: "oritech:accelerator_sensor",
    pattern: [" A ", " B ", "   "],
    keys: {
      A: "create:content_observer",
      B: "oritech:accelerator_ring",
    },
  },
  {
    output: "oritech:accelerator_motor",
    pattern: [" A ", "BCB", "DED"],
    keys: {
      A: "oritech:superconductor",
      B: "createaddition:electrum_ingot",
      C: "kubejs:electrum_core",
      D: "oritech:ion_thruster",
      E: "oritech:duratium_ingot",
    },
  },
  {
    output: "oritech:shrinker_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "oritech:dubios_container",
      B: "oritech:superconductor",
      C: "kubejs:electrum_core",
      D: "oritech:motor",
      E: "oritech:still_strange_matter_bucket",
    },
  },
  {
    output: "oritech:powered_furnace_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "minecraft:copper_ingot",
      B: "#c:silicon",
      C: "kubejs:electrum_core",
      D: "oritech:magnetic_coil",
      E: "minecraft:furnace",
    },
  },
  {
    output: "oritech:cooler_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "minecraft:iron_ingot",
      B: "oritech:motor",
      C: "kubejs:electrum_core",
      D: "minecraft:ice",
      E: "minecraft:cauldron",
    },
  },
  {
    output: "oritech:refinery_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "oritech:refinery_module_block",
      B: "oritech:motor",
      C: "kubejs:electrum_core",
      D: "#c:ingots/steel",
      E: "minecraft:cauldron",
    },
  },
  {
    output: "oritech:refinery_module_block",
    pattern: ["AAA", "ABA", "CDC"],
    keys: {
      A: "minecraft:copper_ingot",
      B: "kubejs:electrum_core",
      C: "#c:silicon",
      D: "oritech:small_tank_block",
    },
  },
  {
    output: "oritech:deep_drill_block",
    pattern: ["AAA", "BCB", "DED"],
    keys: {
      A: "oritech:duratium_ingot",
      B: "oritech:motor",
      C: "kubejs:electrum_core",
      D: "oritech:heisenberg_compensator",
      E: "oritech:overcharged_crystal",
    },
  },
  {
    output: "oritech:augment_application_block",
    pattern: ["ABA", "CDC", "EFE"],
    keys: {
      A: "oritech:dubios_container",
      B: "oritech:carbon_fibre_strands",
      C: "oritech:motor",
      D: "kubejs:electrum_core",
      E: "minecraft:smithing_table",
      F: "create:mechanical_crafter",
    },
  },
  {
    output: "oritech:drone_port_block",
    pattern: ["ABA", "CDC", "EFE"],
    keys: {
      A: "oritech:advanced_computing_engine",
      B: "oritech:super_ai_chip",
      C: "oritech:superconductor",
      D: "oritech:duratium_ingot",
      E: "oritech:motor",
      F: "kubejs:electrum_core",
    },
  },
];

[
  "oritech:super_ai_chip",
  "oritech:advanced_computing_engine",
  "oritech:drone_port_block",
];

ServerEvents.recipes((event) => {
  oritechMachineShapedRecipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.keys);
  });
});
