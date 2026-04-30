/**
 * Removes recipes by their recipe IDs.
 *
 * @param {*} event - KubeJS recipe event.
 * @param {string[]} recipes - List of recipe IDs to remove.
 */
function removeRecipes(event, recipes) {
  recipes.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });
}

/**
 * Replaces inputs in recipes matching specific outputs.
 *
 * @param {*} event - KubeJS recipe event.
 * @param {Object[]} recipes - List of recipe replacement configurations.
 * @param {string[]} recipes[].outputs - Recipe outputs to target.
 * @param {string[][]} recipes[].replacements - List of input replacements as [from, to].
 */
function replaceInputFromRecipes(event, recipes) {
  recipes.forEach((recipe) => {
    recipe.outputs.forEach((output) => {
      recipe.replacements.forEach(([from, to]) => {
        event.replaceInput({ output: output }, from, to);
      });
    });
  });
}
