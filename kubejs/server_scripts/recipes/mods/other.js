const otherShapedRecipes = [
  {
    output: "illagerinvasion:primal_essence",
    pattern: ["CBC", "BAB", "CBC"],
    keys: {
      A: "minecraft:diamond",
      B: "minecraft:blaze_powder",
      C: "illagerinvasion:illusionary_dust",
    },
  },
];

ServerEvents.recipes((event) => {
  otherShapedRecipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.keys);
  });
});
