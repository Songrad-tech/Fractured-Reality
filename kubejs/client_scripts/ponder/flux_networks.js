const fluxPonderRecipes = [
  {
    target: "fluxnetworks:flux_dust",
    sceneId: "create_flux_dust",
    title: "Creating Flux Dust",
    base: "kubejs:fractured_singularity_block",
    baseName: "a Fractured Singularity Block",
    crusher: "minecraft:obsidian",
    crusherName: "an Obsidian Block",
    input: "ae2:sky_dust",
    inputName: "Sky Stone Dust",
    output: "fluxnetworks:flux_dust",
    outputName: "Flux Dust",
    maximum: 512,
  },
  {
    target: "endrem:network_eye",
    sceneId: "create_network_eye",
    title: "Creating the Network Eye",
    base: "fluxnetworks:gargantuan_flux_storage",
    baseName: "a Gargantuan Flux Storage",
    crusher: "fluxnetworks:flux_block",
    crusherName: "a Flux Block",
    input: "kubejs:fractured_pearl",
    inputName: "a Fractured Pearl",
    output: "endrem:network_eye",
    outputName: "the Network Eye",
    maximum: 1,
  },
];

Ponder.tags((event) => {
  event.createTag(
    "kubejs:world_transformations",
    "fluxnetworks:flux_dust",
    "World Transformations",
    "Crafting processes performed directly in the world.",
    [
      "fluxnetworks:flux_dust",
      "endrem:network_eye",
      "kubejs:honey_pearl",
      "kubejs:budding_fractured",
    ],
  );
});

Ponder.registry((event) => {
  fluxPonderRecipes.forEach((recipe) => {
    event
      .create(recipe.target)
      .tag("kubejs:world_transformations")
      .scene(recipe.sceneId, recipe.title, (scene, util) => {
        const basePos = [2, 1, 2];
        const itemPos = [2.5, 2.25, 2.5];
        const crusherPos = [2, 3, 2];

        scene.showBasePlate();
        scene.scaleSceneView(0.9);
        scene.setSceneOffsetY(-1);

        scene.world.setBlock(basePos, recipe.base, false);
        scene.world.setBlock(crusherPos, recipe.crusher, false);
        scene.idle(10);

        scene.world.showSection(basePos, Facing.DOWN);
        scene
          .text(50, `Place ${recipe.baseName} at the bottom.`, [2.5, 1.5, 2.5])
          .colored(PonderPalette.INPUT)
          .placeNearTarget()
          .attachKeyFrame();
        scene.idle(55);

        const inputEntity = scene.world.createItemEntity(
          itemPos,
          util.vector.of(0, 0, 0),
          recipe.input,
        );
        scene
          .text(55, `Drop ${recipe.inputName} one block above it.`, itemPos)
          .colored(PonderPalette.INPUT)
          .placeNearTarget()
          .attachKeyFrame();
        scene.idle(60);

        scene.world.showSection(crusherPos, Facing.DOWN);
        scene
          .text(55, `Place ${recipe.crusherName} one more block above.`, [2.5, 3.5, 2.5])
          .colored(PonderPalette.INPUT)
          .placeNearTarget()
          .attachKeyFrame();
        scene.idle(60);

        scene
          .showControls(45, [2.5, 4, 2.5], "down")
          .leftClick();
        scene
          .text(45, `Left-click ${recipe.crusherName}.`, [2.5, 3.5, 2.5])
          .colored(PonderPalette.MEDIUM)
          .placeNearTarget()
          .attachKeyFrame();
        scene.idle(50);

        scene.world.removeEntity(inputEntity);
        scene.world.setBlock(crusherPos, "minecraft:air", true);
        scene.world.setBlock([2, 2, 2], recipe.crusher, true);
        scene.particles
          .simple(20, "lava", [2.5, 3.2, 2.5])
          .density(18)
          .withinBlockSpace();
        scene.playSound("entity.ender_dragon.shoot", 1);

        scene.world.createItemEntity(
          [2.5, 3.4, 2.5],
          util.vector.of(0, 0.12, 0),
          recipe.output,
        );
        scene.idle(15);

        const amountText =
          recipe.maximum > 1
            ? `Up to ${recipe.maximum} items can be transformed at once.`
            : "Only one item is transformed at a time.";

        scene
          .text(80, `${recipe.outputName} appears above. ${amountText}`, [2.5, 3.6, 2.5])
          .colored(PonderPalette.OUTPUT)
          .placeNearTarget()
          .attachKeyFrame();
        scene.idle(90);
      });
  });
});
