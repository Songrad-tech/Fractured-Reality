const VALID_HIVES = ["minecraft:bee_nest", "minecraft:beehive"];

BlockEvents.rightClicked((event) => {
  const { block, player, server } = event;
  const item = player.mainHandItem;

  if (!VALID_HIVES.includes(block.id)) return;
  if (item.id !== "kubejs:honey_pearl") return;

  const uuid = player.uuid;

  if (!player.creative) {
    item.count--;
  }

  server.runCommandSilent(
    "execute in the_bumblezone:the_bumblezone run forceload add 0 0",
  );

  server.scheduleInTicks(20, () => {
    server.runCommandSilent(
      "execute in the_bumblezone:the_bumblezone run function fractured_reality:place_bumblezone_entry",
    );

    server.scheduleInTicks(10, () => {
      server.runCommandSilent(
        `execute in the_bumblezone:the_bumblezone run tp ${uuid} 4 122 4`,
      );
    });
  });
});
