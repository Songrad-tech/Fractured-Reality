ServerEvents.recipes((event) => {
  event.shaped("kubejs:andesite_core", ["ABA", "CDC", "EEE"], {
    A: "create:shaft",
    B: "create:hand_crank",
    C: "create:cogwheel",
    D: "create:andesite_casing",
    E: "create:linear_chassis",
  });

  sequencedAssembly(
    event,
    {
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
    "kubejs:sequenced_assembly/copper_core",
  );

  sequencedAssembly(
    event,
    {
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
    "kubejs:sequenced_assembly/brass_core",
  );

  mechanicalCrafting(
    event,
    {
      key: {
        A: item("minecraft:quartz_block"),
        B: item("ae2:sky_stone_block"),
        C: item("oritech:energite_block"),
      },
      pattern: ["AAAAA", "ABBBA", "ABCBA", "ABBBA", "AAAAA"],
      result: "kubejs:fluix_core",
    },
    "kubejs:mechanical_crafting/fluix_core",
  );

  event
    .custom({
      type: "create:item_application",
      ingredients: [
        item("minecraft:polished_deepslate"),
        item("createaddition:electrum_ingot"),
      ],
      results: [result("kubejs:electrum_casing")],
    })
    .id("kubejs:item_application/electrum_casing");

  event
    .custom({
      type: "create:crushing",
      ingredients: [item("kubejs:viridite")],
      processing_time: 250,
      results: [
        {
          chance: 0.4,
          id: "create:crushed_raw_nickel",
        },
        {
          chance: 0.4,
          id: "oritech:nickel_nugget",
        },
      ],
    })
    .id("kubejs:crushing/viridite");
});
