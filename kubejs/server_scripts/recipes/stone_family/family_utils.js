function addStonecuttingFamily(event, stoneType, variants) {
  const input = "#kubejs:stone_type/" + stoneType;

  variants.forEach((variant) => {
    const baseId = "kubejs:" + variant;

    event.stonecutting(baseId, input);
    event.stonecutting("2x " + baseId + "_slab", input);
    event.stonecutting(baseId + "_stairs", input);
    event.stonecutting(baseId + "_wall", input);
  });
}

function addStoneCraftingFamily(event, baseId) {
  const block = "kubejs:" + baseId;

  event.shaped("4x " + block + "_stairs", ["A  ", "AA ", "AAA"], {
    A: block,
  });

  event.shaped("6x " + block + "_slab", ["AAA"], {
    A: block,
  });

  event.shaped("6x " + block + "_wall", ["AAA", "AAA"], {
    A: block,
  });
}

function addStoneVariantCrafts(event, stoneType) {
  event.shaped("4x kubejs:" + stoneType + "_cut", ["AA", "AA"], {
    A: "kubejs:" + stoneType,
  });

  event.shaped("4x kubejs:" + stoneType + "_cut_brick", ["AA", "AA"], {
    A: "kubejs:" + stoneType + "_cut",
  });

  event.shaped("4x kubejs:" + stoneType + "_cut_small_brick", ["AA", "AA"], {
    A: "kubejs:" + stoneType + "_cut_brick",
  });

  event.shaped("4x kubejs:" + stoneType + "_cut_polished", ["AA", "AA"], {
    A: "kubejs:" + stoneType,
  });
}
