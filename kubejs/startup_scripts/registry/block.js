StartupEvents.registry("block", (event) => {
  event.create("electrum_casing").soundType("metal");

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
});
