const disabledItems = [
     "oritech:electrum_ingot",
    // "oritech:electrum_dust",
     "oritech:electrum_block"
]

ServerEvents.tags("item", (event) => {
  disabledItems.forEach((item) => {
    let stack = Item.of(item).getTags();
    stack.forEach((tag) => {
      event.remove(tag, [item]);
    });
  });
  event.add("c:hidden_from_recipe_viewers", disabledItems);
});

ServerEvents.recipes((event) => {
  event.remove({ output: disabledItems });
});