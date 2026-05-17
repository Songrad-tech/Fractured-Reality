//priority: 1000

function removeRecipes(event, recipes) {
  recipes.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
}

function replaceInputFromRecipes(event, recipes) {
  recipes.forEach((recipe) => {
    recipe.outputs.forEach((output) => {
      recipe.replacements.forEach(([from, to]) => {
        event.replaceInput({ output: output }, from, to);
      });
    });
  });
}

function item(id) {
  return { item: id };
}

function tag(id) {
  return { tag: id };
}

function fluid(id, amount) {
  return {
    type: "neoforge:single",
    amount: amount,
    fluid: id,
  };
}

function result(id, chance) {
  const output = { id: id };

  if (chance !== undefined) {
    output.chance = chance;
  }

  return output;
}
