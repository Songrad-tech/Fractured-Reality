const FRACTURED_GROWTH_CHANCE = 0.2;

const FRACTURED_DIRECTIONS = ["up", "down", "north", "south", "east", "west"];

const FRACTURED_GROWTH_STAGES = [
  "kubejs:small_fractured_bud",
  "kubejs:medium_fractured_bud",
  "kubejs:large_fractured_bud",
  "kubejs:fractured_cluster",
];

const FRACTURED_NEXT_GROWTH_STAGE = {};
for (let i = 0; i < FRACTURED_GROWTH_STAGES.length - 1; i++) {
  FRACTURED_NEXT_GROWTH_STAGE[FRACTURED_GROWTH_STAGES[i]] =
    FRACTURED_GROWTH_STAGES[i + 1];
}

function canPlaceFracturedBud(block) {
  return block.id === "minecraft:air" || block.id === "minecraft:water";
}

function growFracturedBud(block) {
  const nextBlockId = FRACTURED_NEXT_GROWTH_STAGE[block.id];
  if (!nextBlockId) return false;

  block.set(nextBlockId, {
    facing: block.properties.facing,
    waterlogged: block.properties.waterlogged === "true",
  });

  return true;
}

BlockEvents.randomTick("kubejs:budding_fractured", (event) => {
  const { block, random } = event;

  if (random.nextFloat() > FRACTURED_GROWTH_CHANCE) return;

  const direction =
    FRACTURED_DIRECTIONS[random.nextInt(FRACTURED_DIRECTIONS.length)];

  const target = block[direction];

  if (!target) return;

  if (canPlaceFracturedBud(target)) {
    target.set("kubejs:small_fractured_bud", {
      facing: direction,
      waterlogged: target.id === "minecraft:water",
    });

    return;
  }

  growFracturedBud(target);
});
