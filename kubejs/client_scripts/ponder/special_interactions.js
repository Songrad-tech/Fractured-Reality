Ponder.registry((event) => {
  event
    .create("kubejs:honey_pearl")
    .tag("kubejs:world_transformations")
    .scene("enter_the_bumblezone", "Entering the Bumblezone", (scene, util) => {
      const hivePos = [2, 1, 2];

      scene.showBasePlate();
      scene.scaleSceneView(0.9);
      scene.setSceneOffsetY(-1);
      scene.world.setBlock(hivePos, "minecraft:bee_nest", false);
      scene.world.showSection(hivePos, Facing.DOWN);
      scene.world.createEntity("minecraft:bee", [3.5, 1.5, 2.5]);
      scene.idle(15);

      scene
        .text(65, "Find a naturally generated Bee Nest or place a Beehive.", [2.5, 1.5, 2.5])
        .colored(PonderPalette.INPUT)
        .placeNearTarget()
        .attachKeyFrame();
      scene.idle(70);

      scene
        .showControls(55, [2.5, 2.2, 2.5], "down")
        .rightClick()
        .withItem("kubejs:honey_pearl");
      scene
        .text(55, "Right-click the hive with a Honey Pearl.", [2.5, 1.5, 2.5])
        .colored(PonderPalette.MEDIUM)
        .placeNearTarget()
        .attachKeyFrame();
      scene.idle(60);

      scene.particles
        .simple(35, "portal", [2.5, 1.5, 2.5])
        .density(30)
        .withinBlockSpace();
      scene.playSound("block.portal.travel", 0.8);
      scene.idle(25);

      scene.world.setBlocks([0, 0, 0, 4, 0, 4], "minecraft:honeycomb_block", true);
      scene.world.setBlock(hivePos, "minecraft:honey_block", true);
      scene.particles
        .simple(20, "wax_on", [2.5, 1.5, 2.5])
        .density(20)
        .withinBlockSpace();

      scene
        .text(85, "The Honey Pearl is consumed and you are transported to the Bumblezone.", [2.5, 1.5, 2.5])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame();
      scene.idle(95);
    });

  event
    .create("kubejs:budding_fractured")
    .tag("kubejs:world_transformations")
    .scene("fractured_crystal_growth", "Growing Fractured Crystals", (scene, util) => {
      const buddingPos = [2, 1, 2];
      const budPos = [2, 2, 2];
      const growthStages = [
        "kubejs:small_fractured_bud",
        "kubejs:medium_fractured_bud",
        "kubejs:large_fractured_bud",
        "kubejs:fractured_cluster",
      ];

      scene.showBasePlate();
      scene.scaleSceneView(0.9);
      scene.setSceneOffsetY(-1);
      scene.world.setBlock(buddingPos, "kubejs:budding_fractured", false);
      scene.world.showSection(buddingPos, Facing.DOWN);
      scene.idle(15);

      scene
        .text(65, "A Budding Fractured Block slowly grows crystals on its free sides.", [2.5, 1.5, 2.5])
        .colored(PonderPalette.INPUT)
        .placeNearTarget()
        .attachKeyFrame();
      scene.idle(70);

      growthStages.forEach((stage, index) => {
        const state = Block.id(stage).with("facing", "up");

        if (index === 0) {
          scene.world.setBlock(budPos, state, false);
          scene.world.showSection(budPos, Facing.DOWN);
        } else {
          scene.world.setBlock(budPos, state, true);
        }

        scene.particles
          .block(12, stage, [2.5, 2.3, 2.5])
          .density(5)
          .withinBlockSpace();
        scene.idle(35);
      });

      scene
        .text(70, "The bud passes through four stages before becoming a Fractured Cluster.", [2.5, 2.5, 2.5])
        .colored(PonderPalette.MEDIUM)
        .placeNearTarget()
        .attachKeyFrame();
      scene.idle(75);

      scene
        .showControls(45, [2.5, 3, 2.5], "down")
        .leftClick()
        .withItem("minecraft:iron_pickaxe");
      scene.idle(45);

      scene.world.setBlock(budPos, "minecraft:air", true);
      scene.playSound("block.amethyst_cluster.break", 1);
      scene.particles
        .block(15, "kubejs:fractured_cluster", [2.5, 2.4, 2.5])
        .density(12)
        .withinBlockSpace();
      scene.world.createItemEntity([2.5, 2.2, 2.5], util.vector.of(-0.08, 0.2, 0), "kubejs:fractured_shard");
      scene.world.createItemEntity([2.5, 2.2, 2.5], util.vector.of(0.08, 0.2, 0), "kubejs:fractured_shard");
      scene.world.createItemEntity([2.5, 2.2, 2.5], util.vector.of(0, 0.25, 0.08), "kubejs:fractured_shard");

      scene
        .text(70, "Breaking a mature cluster drops 2–4 Fractured Shards.", [2.5, 2.4, 2.5])
        .colored(PonderPalette.OUTPUT)
        .placeNearTarget()
        .attachKeyFrame();
      scene.idle(80);

      const sideBuds = [
        { pos: [3, 1, 2], facing: "east" },
        { pos: [1, 1, 2], facing: "west" },
        { pos: [2, 1, 1], facing: "north" },
        { pos: [2, 1, 3], facing: "south" },
      ];

      sideBuds.forEach((bud) => {
        scene.world.setBlock(
          bud.pos,
          Block.id("kubejs:small_fractured_bud").with("facing", bud.facing),
          false,
        );
        scene.world.showSection(bud.pos, Facing.DOWN);
      });
      scene.idle(25);

      scene
        .text(65, "Crystals require solid support and can grow in every direction, even underwater.", [2.5, 1.5, 2.5])
        .colored(PonderPalette.MEDIUM)
        .placeNearTarget()
        .attachKeyFrame();
      scene.idle(75);

      scene.world.setBlock(buddingPos, "minecraft:air", true);
      sideBuds.forEach((bud) => {
        scene.world.setBlock(bud.pos, "minecraft:air", true);
      });
      scene.playSound("block.amethyst_block.break", 1);

      scene
        .text(65, "Removing the supporting block also breaks every attached crystal.", [2.5, 1.5, 2.5])
        .colored(PonderPalette.RED)
        .placeNearTarget()
        .attachKeyFrame();
      scene.idle(75);
    });
});
