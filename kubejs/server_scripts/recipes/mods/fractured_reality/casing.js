ServerEvents.recipes((event) => {
  event
    .custom({
      type: "create:item_application",
      ingredients: [
        item("minecraft:polished_deepslate"),
        item("createaddition:electrum_ingot"),
      ],
      results: [result("kubejs:electrum_casing")],
    })
    .id("kubejs:item_application/electrum_casing");
});
