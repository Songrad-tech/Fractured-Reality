Platform.mods.kubejs.name = "Fractured Reality";

StartupEvents.registry("item", (event) => {
  event.create("create:drill_head");
  event.create("create:saw_blade");

  event
    .create("andesite_core")
    .parentModel("fractured_reality:block/andesite_core");

  event
    .create("copper_core")
    .parentModel("fractured_reality:block/copper_core");

  event
    .create("incomplete_copper_core")
    .parentModel("fractured_reality:block/incomplete_copper_core");
});
