const disabledItems = [
  "oritech:electrum_ingot",
  "oritech:electrum_block",
  "metalbarrels:silver_to_crystal",
  "metalbarrels:silver_barrel",
  "metalbarrels:silver_to_diamond",
  "metalbarrels:silver_to_netherite",
  "metalbarrels:copper_to_silver",
  "metalbarrels:silver_to_obsidian",
  "metalbarrels:silver_to_gold",
  "metalbarrels:wood_to_silver",
  "metalbarrels:iron_to_silver",
];

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
