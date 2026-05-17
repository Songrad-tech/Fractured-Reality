const coreSequencedRecipes = [
  {
    id: "kubejs:sequenced_assembly/copper_core",
    ingredient: item("create:copper_casing"),
    transitionalItem: "kubejs:incomplete_copper_core",
    results: [result("kubejs:copper_core")],
    sequence: [
      deploying("kubejs:incomplete_copper_core", item("create:fluid_pipe")),
      deploying("kubejs:incomplete_copper_core", item("create:fluid_tank")),
      deploying(
        "kubejs:incomplete_copper_core",
        item("create:mechanical_pump"),
      ),
      pressing("kubejs:incomplete_copper_core"),
    ],
  },
  {
    id: "kubejs:sequenced_assembly/brass_core",
    ingredient: item("create:brass_casing"),
    transitionalItem: "kubejs:incomplete_brass_core",
    loops: 2,
    results: [result("kubejs:brass_core")],
    sequence: [
      deploying("kubejs:incomplete_brass_core", item("create:flywheel")),
      pressing("kubejs:incomplete_brass_core"),
      deploying("kubejs:incomplete_brass_core", item("create:cogwheel")),
      deploying("kubejs:incomplete_brass_core", item("create:brass_ingot")),
      deploying("kubejs:incomplete_brass_core", item("create:electron_tube")),
      pressing("kubejs:incomplete_brass_core"),
    ],
  },
];

const coreShapedRecipes = [
  {
    output: "kubejs:andesite_core",
    pattern: ["ABA", "CDC", "EEE"],
    key: {
      A: "create:shaft",
      B: "create:hand_crank",
      C: "create:cogwheel",
      D: "create:andesite_casing",
      E: "create:linear_chassis",
    },
  },
];

const coreMechanicalRecipes = [
  {
    id: "kubejs:mechanical_crafting/fluix_core",
    key: {
      A: item("minecraft:quartz_block"),
      B: item("ae2:sky_stone_block"),
      C: item("oritech:energite_block"),
    },
    pattern: ["AAAAA", "ABBBA", "ABCBA", "ABBBA", "AAAAA"],
    result: "kubejs:fluix_core",
  },
];

ServerEvents.recipes((event) => {
  coreSequencedRecipes.forEach((recipe) => {
    sequencedAssembly(event, recipe, recipe.id);
  });

  coreShapedRecipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key);
  });

  coreMechanicalRecipes.forEach((recipe) => {
    mechanicalCrafting(event, recipe, recipe.id);
  });
});
