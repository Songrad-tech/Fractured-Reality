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
});
