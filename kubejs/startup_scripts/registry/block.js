StartupEvents.registry("block", (event) => {
  event
    .create("viridite")
    .soundType("stone")
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_wooden_tool");

  event.create("electrum_casing").soundType("metal");
});
