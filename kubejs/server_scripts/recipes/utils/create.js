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

function step(type, transitionalItem, ingredients) {
  const finalIngredients = [item(transitionalItem)];

  ingredients.forEach((ingredient) => {
    finalIngredients.push(ingredient);
  });

  return {
    type: type,
    ingredients: finalIngredients,
    results: [result(transitionalItem)],
  };
}

function deploying(transitionalItem, ingredient) {
  return step("create:deploying", transitionalItem, [ingredient]);
}

function pressing(transitionalItem) {
  return {
    type: "create:pressing",
    ingredients: [item(transitionalItem)],
    results: [result(transitionalItem)],
  };
}

function filling(transitionalItem, fluidIngredient) {
  return step("create:filling", transitionalItem, [fluidIngredient]);
}

function sequencedAssembly(event, recipe, id) {
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: recipe.ingredient,
      loops: recipe.loops || 1,
      results: recipe.results,
      sequence: recipe.sequence,
      transitional_item: result(recipe.transitionalItem),
    })
    .id(id);
}
