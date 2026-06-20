ServerEvents.tags("item", (event) => {
  event.remove("c:ingots/steel", "oritech:biosteel_ingot");
  event.add("c:barrels/wood", "minecraft:barrel");
});
