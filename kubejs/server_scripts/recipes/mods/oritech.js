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
];

ServerEvents.recipes((event) => {
  //Removing Oritech's Alternate or Not Needed Compat with other Mods.
  oritechRecipeRemovals.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
});
