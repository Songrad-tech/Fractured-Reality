const viriditeVariants = [
  "viridite_cut",
  "viridite_cut_brick",
  "viridite_cut_polished",
  "viridite_cut_small_brick",
];

ServerEvents.recipes((event) => {
  event.shaped(Item.of("kubejs:viridite", 16), ["AAA", "ABA", "AAA"], {
    A: "mysticalagriculture:stone_essence",
    B: "mysticalagriculture:nickel_essence",
  });

  event.stonecutting("kubejs:viridite", "#kubejs:stone_type/viridite");
  event.stonecutting(
    "kubejs:viridite_cut_pillar",
    "#kubejs:stone_type/viridite",
  );

  addStoneVariantCrafts(event, "viridite");

  addStonecuttingFamily(event, "viridite", viriditeVariants);

  viriditeVariants.forEach((variant) => {
    addStoneCraftingFamily(event, variant);
  });
});
