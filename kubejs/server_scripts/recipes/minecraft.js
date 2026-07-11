ServerEvents.recipes((event) => {
  event
    .shaped("kubejs:nether_star_block", ["AAA", "AAA", "AAA"], {
      A: "minecraft:nether_star",
    })
    .id("kubejs:minecraft/nether_star_block");

  event
    .shapeless("9x minecraft:nether_star", ["kubejs:nether_star_block"])
    .id("kubejs:minecraft/nether_star_from_block");
});
