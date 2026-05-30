function createStoneFamily(event, id, displayName, type) {
  let block;

  if (type) {
    block = event.create(id, type);
  } else {
    block = event.create(id);
  }

  block
    .displayName(displayName)
    .soundType("stone")
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe");

  return block;
}

function createFullStoneSet(event, id, displayName) {
  createStoneFamily(event, id, displayName).tagItem(
    "kubejs:stone_type/viridite",
  );

  createStoneFamily(
    event,
    id + "_stairs",
    displayName + " Stairs",
    "stairs",
  ).tagItem("kubejs:stone_type/viridite");
  createStoneFamily(event, id + "_slab", displayName + " Slab", "slab");
  createStoneFamily(event, id + "_wall", displayName + " Wall", "wall").tagItem(
    "kubejs:stone_type/viridite",
  );
}

function createStoneCore(event, id, hidden) {
  const block = event
    .create(id)
    .parentModel(`fractured_reality:block/core/resources/${id}`)
    .soundType("stone")
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe");

  if (hidden) {
    block.tag("c:hidden_from_recipe_viewers");
  }
}

function budBase(event, id) {
  event
    .create(id)
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
    .tagBlock("oritech:laser_passthrough")
    .tagBlock("minecraft:mineable/pickaxe");
}
