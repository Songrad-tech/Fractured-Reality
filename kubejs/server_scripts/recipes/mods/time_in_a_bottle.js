ServerEvents.recipes((event) => {
  event.remove({ id: "tiab:time_in_a_bottle" });

  mechanicalCrafting(
    event,
    {
      key: {
        A: item("createaddition:electrum_ingot"),
        B: item("minecraft:glass"),
        C: item("ae2:charged_certus_quartz_crystal"),
        D: item("ae2:fluix_crystal"),
        E: item("oritech:adamant_ingot"),
        F: item("oritech:duratium_ingot"),
      },
      pattern: [" AAA ", "  B  ", " BCB ", "BDDDB", "BEEEB", "BFFFB", " BBB "],
      result: "tiab:time_in_a_bottle",
    },
    "kubejs:mechanical_crafting/time_in_a_bottle",
  );
});
