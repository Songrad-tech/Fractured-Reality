const pipezRecipeRemovals = [
  "pipez:energy_pipe",
  "pipez:universal_pipe",
  "pipez:item_pipe",
  "pipez:improved_upgrade",
  "pipez:fluid_pipe",
  "pipez:filter_destination_tool",
  "pipez:ultimate_upgrade",
  "pipez:advanced_upgrade",
  "pipez:basic_upgrade",
];

const pipezShapeRecipes = [
  {
    output: "16x pipez:energy_pipe",
    pattern: ["AAA", "BCB", "AAA"],
    keys: {
      A: "oritech:steel_ingot",
      B: "oritech:energite_ingot",
      C: "oritech:energite_block",
    },
    id: "pipez:energy_pipe",
  },
  {
    output: "16x pipez:item_pipe",
    pattern: ["AAA", "BCB", "AAA"],
    keys: {
      A: "oritech:steel_ingot",
      C: "create:belt_connector",
      B: "oritech:energite_block",
    },
    id: "pipez:item_pipe",
  },
  {
    output: "16x pipez:fluid_pipe",
    pattern: ["AAA", "BCB", "AAA"],
    keys: {
      A: "oritech:steel_ingot",
      C: "oritech:energite_ingot",
      B: "create:fluid_tank",
    },
    id: "pipez:fluid_pipe",
  },
  {
    output: "6x pipez:universal_pipe",
    pattern: ["ABC", "DED", "ABC"],
    keys: {
      A: "pipez:item_pipe",
      C: "pipez:fluid_pipe",
      B: "pipez:energy_pipe",
      D: "oritech:steel_ingot",
      E: "oritech:energite_block",
    },
    id: "pipez:universal_pipe",
  },
  {
    output: "pipez:basic_upgrade",
    pattern: ["AAA", "ABA", "AAA"],
    keys: {
      A: "oritech:steel_ingot",
      B: "oritech:energite_ingot",
    },
    id: "pipez:basic_upgrade",
  },
  {
    output: "pipez:improved_upgrade",
    pattern: ["ABA", "BCB", "ABA"],
    keys: {
      A: "createaddition:electrum_ingot",
      B: "oritech:energite_ingot",
      C: "pipez:basic_upgrade",
    },
    id: "pipez:improved_upgrade",
  },
  {
    output: "pipez:advanced_upgrade",
    pattern: ["ABA", "BCB", "ABA"],
    keys: {
      A: "oritech:adamant_ingot",
      B: "oritech:energite_block",
      C: "pipez:improved_upgrade",
    },
    id: "pipez:advanced_upgrade",
  },
  {
    output: "pipez:ultimate_upgrade",
    pattern: ["ABA", "BCB", "ABA"],
    keys: {
      A: "oritech:duratium_ingot",
      B: "oritech:energite_block",
      C: "pipez:advanced_upgrade",
    },
    id: "pipez:ultimate_upgrade",
  },
  {
    output: "pipez:filter_destination_tool",
    pattern: ["AAA", "CDC", "ABA"],
    keys: {
      A: "oritech:steel_ingot",
      B: "create:linked_controller",
      C: "oritech:energite_ingot",
      D: "#c:glass_panes",
    },
    id: "pipez:filter_destination_tool",
  },
];

ServerEvents.recipes((event) => {
  removeRecipes(event, pipezRecipeRemovals);

  pipezShapeRecipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.keys).id(recipe.id);
  });
});
