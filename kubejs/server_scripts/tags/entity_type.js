ServerEvents.tags("entity_type", (event) => {
  event.remove(
    "the_bumblezone:dimension_teleportation/teleport_projectiles",
    "minecraft:ender_pearl",
  );
});
