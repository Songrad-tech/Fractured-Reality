StartupEvents.registry("item", (event) => {
  function createItem(id, options) {
    options = options || {};
    let item = event.create(id).texture(`${FRACTURED_MOD_ID}:item/${id}`);

    if (options.stackSize !== undefined) {
      item = item.maxStackSize(options.stackSize);
    }

    if (options.tags) {
      for (const tag of options.tags) {
        item = item.tag(tag);
      }
    }

    return item;
  }

  event.create("create:drill_head");
  event.create("create:saw_blade");

  event
    .create("fractured_wallet")
    .parentModel(`${FRACTURED_MOD_ID}:item/fractured_wallet`)
    .maxStackSize(1);

  const cores = [
    "andesite_core",
    "copper_core",
    "brass_core",
    "electrum_core",
    "fluix_core",
    "fractured_core",
  ];

  for (const core of cores) {
    event.create(core).parentModel(`${FRACTURED_MOD_ID}:block/${core}`);
  }

  const incompleteBlocks = [
    "incomplete_copper_core",
    "incomplete_brass_core",
    "incomplete_electrum_core",
    "incomplete_creative_motor",
  ];

  for (const item of incompleteBlocks) {
    event
      .create(item)
      .parentModel(`${FRACTURED_MOD_ID}:block/${item}`)
      .tag("c:hidden_from_recipe_viewers");
  }

  createItem("fractured_shard", {
    tags: ["the_bumblezone:crystalline_flower/xp_2_when_consumed"],
  });

  createItem("fractured_pearl", {
    stackSize: 16,
  });

  const otherItems = [
    "fractured_coin",
    "quarter_star",
    "uncharged_digital_eye",
    "partial_mechanical_eye",
    "partial_under_eye",
    "electrical_eye",
    "fractured_ingot",
    "fractured_flour",
  ];

  for (const item of otherItems) {
    createItem(item);
  }

  createItem("honey_pearl", {
    stackSize: 16,
  });

  createItem("fractured_dragon_heart", {
    stackSize: 1,
  });

  createItem("incomplete_fractured_ingot", {
    tags: ["c:hidden_from_recipe_viewers"],
  });

  createItem("fractured_cake_base", {
    tags: ["create:upright_on_belt"],
  });
});
