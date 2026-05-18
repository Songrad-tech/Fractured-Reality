const ressourcesCoreSequencedRecipes = [
  {
    id: "kubejs:sequenced_assembly/ochrum_core",
    ingredient: "minecraft:gold_block",
    transitionalItem: "kubejs:incomplete_ochrum_core",
    result: "kubejs:ochrum_core",
    deploying: "create:ochrum",
  },
  {
    id: "kubejs:sequenced_assembly/asurine_core",
    ingredient: "create:zinc_block",
    transitionalItem: "kubejs:incomplete_asurine_core",
    result: "kubejs:asurine_core",
    deploying: "create:asurine",
  },
  {
    id: "kubejs:sequenced_assembly/crimsite_core",
    ingredient: "minecraft:iron_block",
    transitionalItem: "kubejs:incomplete_crimsite_core",
    result: "kubejs:crimsite_core",
    deploying: "create:crimsite",
  },
  {
    id: "kubejs:sequenced_assembly/veridium_core",
    ingredient: "minecraft:copper_block",
    transitionalItem: "kubejs:incomplete_veridium_core",
    result: "kubejs:veridium_core",
    deploying: "create:veridium",
  },
  {
    id: "kubejs:sequenced_assembly/viridite_core",
    ingredient: "oritech:nickel_block",
    transitionalItem: "kubejs:incomplete_viridite_core",
    result: "kubejs:viridite_core",
    deploying: "kubejs:viridite",
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
