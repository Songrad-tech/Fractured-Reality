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
    createFullStoneSet(event, variant.id, variant.name, "viridite");
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

  budBase(event, "small_fractured_bud");
  budBase(event, "medium_fractured_bud");
  budBase(event, "large_fractured_bud");
  event
    .create("fractured_cluster")
    .soundType("amethyst")
    .hardness(1.5)
    .resistance(1.5)
    .noCollision()
    .notSolid()
    .property(BlockProperties.FACING)
    .placementState((state) => {
      state.set(BlockProperties.FACING, String(state.getClickedFace()));
    })
    .waterlogged()
    .defaultCutout()
    .tagBlock("minecraft:mineable/pickaxe");

  event
    .create("fractured_block")
    .soundType("amethyst")
    .hardness(1.5)
    .resistance(1.5)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("the_bumblezone:crystalline_flower/can_be_placed_on")
    .tagItem("the_bumblezone:crystalline_flower/xp_8_when_consumed");

  event
    .create("budding_fractured")
    .soundType("amethyst")
    .hardness(1.5)
    .resistance(1.5)
    .randomTick(() => {})
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("ae2:growth_acceleratable")
    .tagBlock("oritech:laser_accelerated")
    .tagBlock("the_bumblezone:crystalline_flower/can_be_placed_on");

  event
    .create("fractured_singularity_block")
    .soundType("amethyst")
    .hardness(5)
    .resistance(5)
    .tagBlock("minecraft:mineable/pickaxe");

  event
    .create("nether_star_block")
    .displayName("Nether Star Block")
    .soundType("amethyst")
    .requiresTool(true)
    .hardness(5)
    .resistance(1200)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_diamond_tool")
    .tagBlock("minecraft:beacon_base_blocks");

  const fracturedBlocks = [
    {
      id: "fractured_stone",
      name: "Fractured Stone",
    },
    {
      id: "smooth_fractured_stone",
      name: "Smooth Fractured Stone",
    },
    {
      id: "fractured_stone_bricks",
      name: "Fractured Stone Bricks",
    },
  ];

  fracturedBlocks.forEach((variant) => {
    createFullStoneSet(event, variant.id, variant.name, "fractured");
  });

  event
    .create("fractured_casing")
    .soundType("metal")
    .requiresTool(true)
    .tagItem("create:casing")
    .tagBlock("create:casing")
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("create:wrench_pickup")
    .tagBlock("minecraft:mineable/axe");
});
