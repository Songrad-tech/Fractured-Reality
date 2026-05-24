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
  {
    id: "kubejs:sequenced_assembly/electrum_core",
    ingredient: item("kubejs:electrum_casing"),
    transitionalItem: "kubejs:incomplete_electrum_core",
    loops: 2,
    results: [result("kubejs:electrum_core")],
    sequence: [
      deploying(
        "kubejs:incomplete_electrum_core",
        item("createaddition:tesla_coil"),
      ),
      deploying(
        "kubejs:incomplete_electrum_core",
        item("createaddition:modular_accumulator"),
      ),
      pressing("kubejs:incomplete_electrum_core"),
      deploying(
        "kubejs:incomplete_electrum_core",
        item("createaddition:modular_accumulator"),
      ),
      deploying(
        "kubejs:incomplete_electrum_core",
        item("createaddition:alternator"),
      ),
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

  event
    .custom({
      type: "oritech:assembler",
      ingredients: [
        item("createaddition:tesla_coil"),
        item("createaddition:modular_accumulator"),
        item("kubejs:electrum_casing"),
        item("createaddition:alternator"),
      ],
      results: [
        {
          count: 2,
          id: "kubejs:electrum_core",
        },
      ],
      time: 80,
    })
    .id("kubejs:assembly/electrum_core");
});
