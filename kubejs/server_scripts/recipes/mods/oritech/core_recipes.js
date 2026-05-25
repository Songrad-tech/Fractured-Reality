const oritechCoreShapedRecipes = [
  {
    output: "oritech:machine_core_1",
    pattern: ["AAA", "ABA", "AAA"],
    keys: {
      A: "#minecraft:planks",
      B: "kubejs:electrum_core",
    },
  },
  {
    output: "oritech:machine_core_2",
    pattern: ["AAA", "ABA", "AAA"],
    keys: {
      A: "minecraft:iron_ingot",
      B: "oritech:machine_core_1",
    },
  },
  {
    output: "oritech:machine_core_3",
    pattern: ["AAA", "ABA", "AAA"],
    keys: {
      A: "oritech:carbon_fibre_strands",
      B: "oritech:machine_core_2",
    },
  },
  {
    output: "oritech:machine_core_4",
    pattern: ["ABA", "BCB", "ABA"],
    keys: {
      A: "#oritech:plating",
      B: "oritech:enderic_compound",
      C: "oritech:machine_core_3",
    },
  },
  {
    output: "oritech:machine_core_5",
    pattern: ["ABA", "BCB", "ABA"],
    keys: {
      A: "oritech:adamant_ingot",
      B: "oritech:advanced_computing_engine",
      C: "oritech:machine_core_4",
    },
  },
  {
    output: "oritech:machine_core_6",
    pattern: ["ABA", "BCB", "ABA"],
    keys: {
      A: "oritech:duratium_ingot",
      B: "oritech:dubios_container",
      C: "oritech:machine_core_5",
    },
  },
  {
    output: "oritech:machine_core_7",
    pattern: ["ABA", "BCB", "ABA"],
    keys: {
      A: "oritech:prometheum_ingot",
      B: "oritech:superconductor",
      C: "oritech:machine_core_6",
    },
  },
];

ServerEvents.recipes((event) => {
  oritechCoreShapedRecipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.keys);
  });
});
