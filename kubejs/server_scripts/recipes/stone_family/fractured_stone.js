const fracturedVariants = [
  "fractured_stone",
  "smooth_fractured_stone",
  "fractured_stone_bricks",
];

ServerEvents.recipes((event) => {
  addStonecuttingFamily(event, "fractured", fracturedVariants);

  event.shaped("4x kubejs:fractured_stone_bricks", ["AA", "AA"], {
    A: "kubejs:fractured_stone",
  });

  event.smelting("kubejs:smooth_fractured_stone", "kubejs:fractured_stone");

  fracturedVariants.forEach((variant) => {
    addStoneCraftingFamily(event, variant);
  });
});
