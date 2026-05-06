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
    .parentModel("fractured_reality:block/incomplete_copper_core")
    .tag("c:hidden_from_recipe_viewers");

  event.create("brass_core").parentModel("fractured_reality:block/brass_core");

  event
    .create("incomplete_brass_core")
    .parentModel("fractured_reality:block/incomplete_brass_core")
    .tag("c:hidden_from_recipe_viewers");
});
