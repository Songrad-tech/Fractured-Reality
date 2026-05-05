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
});
