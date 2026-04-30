const oritechRecipeRemovals = [
    "oritech:foundry/alloy/electrum",
    "oritech:pulverizer/electrum",
    "oritech:fragment/electrum"
]

ServerEvents.recipes((event) => {
  //Removing Oritech's Alternate or Not Needed Compat with other Mods.
  oritechRecipeRemovals.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
})