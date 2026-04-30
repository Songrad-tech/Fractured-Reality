const createRecipeRemovals = [
  "create:crafting/materials/andesite_alloy",
  "create:mixing/andesite_alloy",
  "createaddition:compat/ae2/charged_certus_quartz",
];

const createNewRecipes = [
  {
    outputs: ["create:brass_hand"],
    replacements: [["create:brass_sheet", "create:golden_sheet"]],
  },
];

ServerEvents.recipes((event) => {
  removeRecipes(event, createRecipeRemovals);
  replaceInputFromRecipes(event, createNewRecipes);
});
