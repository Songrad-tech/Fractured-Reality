const oritechRecipeRemovals = [
  "oritech:foundry/alloy/electrum",
  "oritech:pulverizer/electrum",
  "oritech:fragment/electrum",
  "oritech:crafting/centrifugealt",
  "oritech:crafting/alloy/adamant",
  "oritech:mixing/compat/create/adamant",
  "oritech:mixing/compat/create/duratium",
  "oritech:foundry/alloy/duratium",
  "oritech:crafting/alloy/steel",
  "oritech:mixing/compat/create/biosteel",
  "oritech:crafting/assembleralter",
  "oritech:crafting/stank",

  // Oritech core
  "oritech:crafting/core1",
  "oritech:crafting/core2",
  "oritech:crafting/core2alt",
  "oritech:crafting/core3",
  "oritech:crafting/core3alt",
  "oritech:crafting/core4",
  "oritech:crafting/core5",
  "oritech:crafting/core6",
  "oritech:crafting/core7",

  //machine
  "oritech:crafting/assembler",
  "oritech:crafting/assembleralt",
  "oritech:crafting/foundry",
  "oritech:crafting/basicgen",
  "oritech:crafting/centrifuge",
  "oritech:crafting/atomicforge",
  "oritech:crafting/pump",
  "oritech:crafting/crusher",
  "oritech:crafting/pulverizeralt",
  "oritech:crafting/pulverizer",
  "oritech:crafting/laserarm",
  "oritech:crafting/refinerymodule",
  "oritech:crafting/placer",
  "oritech:crafting/destroyer",
  "oritech:crafting/fertilizer",
  "oritech:crafting/treefeller",
  "oritech:crafting/acceleratorring",
  "oritech:crafting/particlesensor",
  "oritech:crafting/particlemotor",
  "oritech:crafting/shrinker",
  "oritech:crafting/electricfurnacealt",
  "oritech:crafting/electricfurnace",
  "oritech:crafting/cooler",
  "oritech:crafting/refinery",
  "oritech:crafting/deepdrill",
  "oritech:crafting/refinerymodulealt",
  "oritech:crafting/augment/applicator",
  "oritech:crafting/droneportalt",
  "oritech:crafting/droneport",
];

ServerEvents.recipes((event) => {
  oritechRecipeRemovals.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});
