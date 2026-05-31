const glidersShapeRecipes = [
  {
    output: "vc_gliders:paraglider_iron",
    pattern: ["AAA", "BCB", "D D"],
    keys: {
      A: "vc_gliders:reinforced_paper_iron",
      B: "minecraft:string",
      C: "vc_gliders:paraglider_wood",
      D: "minecraft:feather",
    },
    id: "vc_gliders:paraglider_iron",
  },
  {
    output: "vc_gliders:paraglider_iron",
    pattern: ["AAA", "BCB", "D D"],
    keys: {
      A: "vc_gliders:reinforced_paper_iron",
      B: "minecraft:string",
      C: "vc_gliders:paraglider_wood",
      D: "minecraft:feather",
    },
    id: "vc_gliders:paraglider_iron",
  },
  {
    output: "vc_gliders:paraglider_gold",
    pattern: ["AAA", "BCB", "D D"],
    keys: {
      A: "vc_gliders:reinforced_paper_gold",
      B: "minecraft:string",
      C: "vc_gliders:paraglider_iron",
      D: "minecraft:feather",
    },
    id: "vc_gliders:paraglider_gold",
  },
  {
    output: "vc_gliders:paraglider_diamond",
    pattern: ["AAA", "BCB", "D D"],
    keys: {
      A: "vc_gliders:reinforced_paper_diamond",
      B: "minecraft:string",
      C: "vc_gliders:paraglider_gold",
      D: "minecraft:feather",
    },
    id: "vc_gliders:paraglider_diamond",
  },
  {
    output: "vc_gliders:paraglider_netherite",
    pattern: ["AAA", "BCB", "D D"],
    keys: {
      A: "vc_gliders:reinforced_paper_netherite",
      B: "minecraft:string",
      C: "vc_gliders:paraglider_diamond",
      D: "minecraft:feather",
    },
    id: "vc_gliders:paraglider_netherite",
  },
];

ServerEvents.recipes((event) => {
  glidersShapeRecipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.keys).id(recipe.id);
  });
});
