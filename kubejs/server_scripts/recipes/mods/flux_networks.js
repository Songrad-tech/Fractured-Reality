const $SoundEvents = Java.loadClass("net.minecraft.sounds.SoundEvents");
const $SoundSource = Java.loadClass("net.minecraft.sounds.SoundSource");
const $ParticleTypes = Java.loadClass(
  "net.minecraft.core.particles.ParticleTypes",
);

const recipes = [
  {
    clickedBlock: "minecraft:obsidian",
    baseBlock: "ae2:fluix_block",
    inputItem: "ae2:sky_dust",
    outputItem: "fluxnetworks:flux_dust",
    maxCount: 512,
  },
];

recipes.forEach((recipe) => {
  BlockEvents.leftClicked(recipe.clickedBlock, (event) => {
    const { block, level } = event;
    const pos = block.pos;

    if (block.offset(0, -2, 0).id !== recipe.baseBlock) return;

    let count = 0;

    level
      .getEntitiesWithin(AABB.ofBlock(pos.below()))
      .filter(
        (e) => e.type === "minecraft:item" && e.item.id === recipe.inputItem,
      )
      .forEach((e) => {
        if (count >= recipe.maxCount) return;

        const remaining = recipe.maxCount - count;
        const consumed = Math.min(e.item.count, remaining);

        count += consumed;
        e.item.count -= consumed;

        if (e.item.count <= 0) {
          e.discard();
        }
      });

    if (count === 0) return;

    const entity = block.createEntity("minecraft:item");
    entity.x += 0.5;
    entity.z += 0.5;
    entity.item = Item.of(recipe.outputItem, count);
    entity.setDeltaMovement([0, 0.2, 0]);

    block.set("minecraft:air");
    entity.spawn();

    block.down.set(recipe.clickedBlock);

    level.playSound(
      null,
      pos.x + 0.5,
      pos.y + 0.5,
      pos.z + 0.5,
      $SoundEvents.DRAGON_FIREBALL_EXPLODE,
      $SoundSource.BLOCKS,
      1.0,
      1.0,
    );

    level.sendParticles(
      $ParticleTypes.LAVA,
      pos.x + 0.5,
      pos.y + 0.5,
      pos.z + 0.5,
      Math.max(4, Math.min(count >> 2, 64)),
      0,
      0,
      0,
      0,
    );
  });
});

RecipeViewerEvents.removeEntries("item", (event) => {
  event.remove("fluxnetworks:flux_dust");
});
