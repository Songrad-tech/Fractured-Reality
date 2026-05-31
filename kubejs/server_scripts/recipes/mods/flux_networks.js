const $SoundEvents = Java.loadClass("net.minecraft.sounds.SoundEvents");
const $SoundSource = Java.loadClass("net.minecraft.sounds.SoundSource");
const $ParticleTypes = Java.loadClass(
  "net.minecraft.core.particles.ParticleTypes",
);

const recipes = [
  {
    clickedBlock: "minecraft:obsidian",
    baseBlock: "kubejs:fractured_singularity_block",
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

RecipeViewerEvents.addInformation("item", (event) => {
  event.add("fluxnetworks:flux_dust", [
    "You can generate §lFlux Dust§r using this setup:",
    "",
    "§8-§0 Obsidian on top",
    "§8-§0 Sky Stone dust dropped in the middle",
    "§8-§0 Fractured Singularity Block two blocks below the obsidian",
    "",
    "§8Action:",
    "§0Left-click the Obsidian.",
    "",
    "§8Result:",
    "§0Converts dropped Sky Dust into Flux Dust.",
    "§0Maximum: §f512§0 per activation.",
  ]);
});
