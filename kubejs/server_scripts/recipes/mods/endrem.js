ServerEvents.recipes((event) => {
  event.shaped("endrem:time_eye", ["AAA", "BCB", "ADA"], {
    A: "tempad:time_steel",
    B: "tempad:chronon_battery",
    C: "kubejs:fractured_pearl",
    D: "tempad:chronometer",
  });

  event.custom({
    type: "ae2:transform",
    circumstance: {
      type: "fluid",
      tag: "c:strange_matter",
    },
    ingredients: [
      item("kubejs:fractured_pearl"),
      item("kubejs:fractured_singularity_block"),
      item("ae2:fluix_dust"),
    ],
    result: {
      count: 1,
      id: "endrem:fractured_eye",
    },
  });

  sequencedAssembly(
    event,
    {
      id: "kubejs:sequenced_assembly/mechanical_eye",
      ingredient: item("kubejs:fractured_pearl"),
      transitionalItem: "kubejs:partial_mechanical_eye",
      results: [result("endrem:mechanical_eye")],
      loops: 2,
      sequence: [
        deploying(
          "kubejs:partial_mechanical_eye",
          item("kubejs:andesite_core"),
        ),
        pressing("kubejs:partial_mechanical_eye"),
        deploying("kubejs:partial_mechanical_eye", item("kubejs:copper_core")),
        pressing("kubejs:partial_mechanical_eye"),
        deploying("kubejs:partial_mechanical_eye", item("kubejs:brass_core")),
        pressing("kubejs:partial_mechanical_eye"),
      ],
    },
    "kubejs:sequenced_assembly/mechanical_eye",
  );
});
