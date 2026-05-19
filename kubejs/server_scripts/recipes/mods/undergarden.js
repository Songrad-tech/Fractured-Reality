const undergardenNewRecipes = [
  {
    outputs: ["undergarden:catalyst"],
    replacements: [
      ["minecraft:copper_ingot", "oritech:duratium_ingot"],
      ["minecraft:ender_pearl", "oritech:fluxite"],
    ],
  },
];
ServerEvents.recipes((event) => {
  replaceInputFromRecipes(event, undergardenNewRecipes);
});
