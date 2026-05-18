StartupEvents.registry("block", (event) => {
  event
    .create("electrum_casing")
    .soundType("metal")
    .requiresTool(true)
    .tagItem("create:casing")
    .tagBlock("create:casing")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("create:wrench_pickup")
    .tagBlock("minecraft:mineable/axe");

  event
    .create("viridite")
    .soundType("stone")
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagItem("kubejs:stone_type/viridite");

  event
    .create("viridite_cut_pillar")
    .displayName("Viridite Pillar")
    .soundType("stone")
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagItem("kubejs:stone_type/viridite");

  event
    .create("viridite_cut_layered")
    .displayName("Layered Viridite")
    .soundType("stone")
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagItem("kubejs:stone_type/viridite");

  const viriditeVariants = [
    {
      id: "viridite_cut",
      name: "Cut Viridite",
    },
    {
      id: "viridite_cut_brick",
      name: "Cut Viridite Bricks",
    },
    {
      id: "viridite_cut_polished",
      name: "Polished Cut Viridite",
    },
    {
      id: "viridite_cut_small_brick",
      name: "Small Viridite Bricks",
    },
  ];

  viriditeVariants.forEach((variant) => {
    createFullStoneSet(event, variant.id, variant.name);
  });

  const resourceCores = [
    "ochrum",
    "asurine",
    "crimsite",
    "veridium",
    "viridite",
  ];

  resourceCores.forEach((core) => {
    createStoneCore(event, `${core}_core`, false);
    createStoneCore(event, `incomplete_${core}_core`, true);
  });
});
