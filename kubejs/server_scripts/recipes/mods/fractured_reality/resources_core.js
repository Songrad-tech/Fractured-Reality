const ressourcesCoreSequencedRecipes = [
  {
    id: "kubejs:sequenced_assembly/ochrum_core",
    ingredient: "minecraft:gold_block",
    transitionalItem: "kubejs:incomplete_ochrum_core",
    result: "kubejs:ochrum_core",
    deploying: "create:ochrum",
  },
];

ServerEvents.recipes((event) => {
  ressourcesCoreSequencedRecipes.forEach((recipe) => {
    sequencedAssembly(
      event,
      {
        ingredient: item(recipe.ingredient),
        transitionalItem: recipe.transitionalItem,
        loops: 2,
        results: [result(recipe.result)],
        sequence: [
          deploying(recipe.transitionalItem, item(recipe.deploying)),
          pressing(recipe.transitionalItem),
          deploying(recipe.transitionalItem, item(recipe.deploying)),
          pressing(recipe.transitionalItem),
          filling(recipe.transitionalItem, fluid("minecraft:lava", 500)),
        ],
      },
      recipe.id,
    );
  });
});
