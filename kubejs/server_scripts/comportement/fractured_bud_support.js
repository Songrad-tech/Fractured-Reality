const FRACTURED_BUDS = [
  "kubejs:small_fractured_bud",
  "kubejs:medium_fractured_bud",
  "kubejs:large_fractured_bud",
  "kubejs:fractured_cluster",
];

const BREAK_SOUNDS = {
  "kubejs:small_fractured_bud": "minecraft:block.small_amethyst_bud.break",
  "kubejs:medium_fractured_bud": "minecraft:block.medium_amethyst_bud.break",
  "kubejs:large_fractured_bud": "minecraft:block.large_amethyst_bud.break",
  "kubejs:fractured_cluster": "minecraft:block.amethyst_cluster.break",
};

const DIR = {
  up: [0, 1, 0],
  down: [0, -1, 0],
  north: [0, 0, -1],
  south: [0, 0, 1],
  east: [1, 0, 0],
  west: [-1, 0, 0],
};

function breakFracturedBud(event, bud) {
  const sound =
    BREAK_SOUNDS[bud.id] || "minecraft:block.amethyst_cluster.break";

  event.server.runCommandSilent(
    `playsound ${sound} block @a ${bud.x} ${bud.y} ${bud.z} 1 1`,
  );

  event.server.runCommandSilent(
    `particle minecraft:block{block_state:"${bud.id}"} ${bud.x + 0.5} ${bud.y + 0.5} ${bud.z + 0.5} 0.2 0.2 0.2 0.03 20`,
  );

  if (bud.id === "kubejs:fractured_cluster") {
    const shardCount = Math.floor(Math.random() * 3) + 2;

    event.server.runCommandSilent(
      `summon item ${bud.x + 0.5} ${bud.y + 0.5} ${bud.z + 0.5} {Item:{id:"kubejs:fractured_shard",count:${shardCount}}}`,
    );
  }

  bud.set("minecraft:air");
}

function isSolidSupport(block) {
  if (!block || block.id === "minecraft:air") return false;

  try {
    return block.blockState.canOcclude();
  } catch (e) {
    return false;
  }
}

BlockEvents.broken((event) => {
  var x = event.block.x;
  var y = event.block.y;
  var z = event.block.z;

  var checks = [
    { offset: [0, 1, 0], facing: "up" },
    { offset: [0, -1, 0], facing: "down" },
    { offset: [0, 0, -1], facing: "north" },
    { offset: [0, 0, 1], facing: "south" },
    { offset: [1, 0, 0], facing: "east" },
    { offset: [-1, 0, 0], facing: "west" },
  ];

  for (var i = 0; i < checks.length; i++) {
    var check = checks[i];

    var tx = x + check.offset[0];
    var ty = y + check.offset[1];
    var tz = z + check.offset[2];

    var bud = event.level.getBlock(tx, ty, tz);
    if (!FRACTURED_BUDS.includes(bud.id)) continue;
    var facing = String(bud.properties.facing);
    if (facing !== check.facing) continue;
    breakFracturedBud(event, bud, tx, ty, tz);
  }
});

BlockEvents.placed((event) => {
  if (!FRACTURED_BUDS.includes(event.block.id)) return;

  const facing = String(event.block.properties.facing);
  const dir = DIR[facing];

  if (!dir) return;

  const support = event.level.getBlock(
    event.block.x - dir[0],
    event.block.y - dir[1],
    event.block.z - dir[2],
  );

  if (isSolidSupport(support)) return;

  event.block.popItem(event.block.id);
  event.block.set("minecraft:air");
});
