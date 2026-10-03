ServerEvents.recipes((event) => {
  event.custom({
    type: "functionalstorage:custom_compacting",
    higher_input: countedResult("minecraft:clay", 1),
    lower_input: countedResult("minecraft:clay_ball", 4),
  });

  event.custom({
    type: "functionalstorage:custom_compacting",
    higher_input: countedResult("minecraft:magma_block", 1),
    lower_input: countedResult("minecraft:magma_cream", 4),
  });

  event.custom({
    type: "functionalstorage:custom_compacting",
    higher_input: countedResult("undergarden:depthrock", 1),
    lower_input: countedResult("undergarden:depthrock_pebble", 9),
  });

  event.custom({
    type: "functionalstorage:custom_compacting",
    higher_input: countedResult("minecraft:snow_block", 1),
    lower_input: countedResult("minecraft:snowball", 4),
  });

  event.custom({
    type: "functionalstorage:custom_compacting",
    higher_input: countedResult("minecraft:white_wool", 1),
    lower_input: countedResult("minecraft:string", 4),
  });

  event.custom({
    type: "functionalstorage:custom_compacting",
    higher_input: countedResult("minecraft:bricks", 1),
    lower_input: countedResult("minecraft:brick", 4),
  });

  event.custom({
    type: "functionalstorage:custom_compacting",
    higher_input: countedResult("minecraft:nether_bricks", 1),
    lower_input: countedResult("minecraft:nether_brick", 4),
  });

  event.custom({
    type: "functionalstorage:custom_compacting",
    higher_input: countedResult("minecraft:dripstone_block", 1),
    lower_input: countedResult("minecraft:pointed_dripstone", 4),
  });
});
