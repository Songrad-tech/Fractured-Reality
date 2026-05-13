const ae2RecipeRemovals = ["ae2:charger/charged_certus_quartz_crystal"];

const ae2NewRecipes = [
  {
    outputs: ["ae2:charger"],
    replacements: [["minecraft:copper_ingot", "oritech:energite_ingot"]],
  },
  {
    outputs: ["ae2:inscriber"],
    replacements: [["minecraft:copper_ingot", "kubejs:fluix_core"]],
  },
];

const pressSmithingRecipes = [
  ["ae2:name_press", "create:transmitter"],
  ["ae2:silicon_press", "#c:silicon"],
  ["ae2:logic_processor_press", "create:electron_tube"],
  ["ae2:engineering_processor_press", "create:precision_mechanism"],
  ["ae2:calculation_processor_press", "create:brass_hand"],
];

ServerEvents.recipes((event) => {
  removeRecipes(event, ae2RecipeRemovals);
  replaceInputFromRecipes(event, ae2NewRecipes);

  pressSmithingRecipes.forEach(([output, addition]) => {
    event.smithing(
      output,
      "ae2:charged_certus_quartz_crystal",
      "kubejs:fluix_core",
      addition,
    );
  });

  event.shapeless("ae2:certus_quartz_crystal", [
    "minecraft:quartz",
    "ae2:sky_dust",
  ]);

  event.custom({
    type: "ae2:transform",
    ingredients: [
      item("ae2:certus_quartz_crystal"),
      item("oritech:adamant_block"),
    ],
    result: {
      count: 1,
      id: "ae2:damaged_budding_quartz",
    },
  });

  event.custom({
    type: "ae2:transform",
    ingredients: [
      item("ae2:certus_quartz_crystal"),
      item("oritech:adamant_ingot"),
      item("ae2:damaged_budding_quartz"),
    ],
    result: {
      count: 1,
      id: "ae2:chipped_budding_quartz",
    },
  });

  event.custom({
    type: "ae2:transform",
    ingredients: [
      item("ae2:certus_quartz_crystal"),
      item("oritech:adamant_ingot"),
      item("ae2:chipped_budding_quartz"),
    ],
    result: {
      count: 1,
      id: "ae2:flawed_budding_quartz",
    },
  });

  event.custom({
    type: "ae2:transform",
    ingredients: [
      item("ae2:certus_quartz_crystal"),
      item("oritech:adamant_ingot"),
      item("ae2:flawed_budding_quartz"),
    ],
    result: {
      count: 1,
      id: "ae2:flawless_budding_quartz",
    },
  });
});
