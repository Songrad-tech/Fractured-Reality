const ae2RecipeRemovals = ["ae2:charger/charged_certus_quartz_crystal"];

const ae2NewRecipes = [
  {
    outputs: ["ae2:charger"],
    replacements: [["minecraft:copper_ingot", "oritech:energite_ingot"]],
  },
];

ServerEvents.recipes((event) => {
  removeRecipes(event, ae2RecipeRemovals);
  replaceInputFromRecipes(event, ae2NewRecipes);
});
