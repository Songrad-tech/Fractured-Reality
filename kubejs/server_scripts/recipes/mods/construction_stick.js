const glidersShapelessRecipes = [
  {
    output: "constructionstick:copper_stick",
    items: ["constructionstick:wooden_stick", "minecraft:copper_ingot"],
    id: "constructionstick:copper_stick",
  },
  {
    output: "constructionstick:iron_stick",
    items: ["constructionstick:copper_stick", "minecraft:iron_ingot"],
    id: "constructionstick:iron_stick",
  },
  {
    output: "constructionstick:diamond_stick",
    items: ["constructionstick:iron_stick", "minecraft:diamond"],
    id: "constructionstick:diamond_stick",
  },
  {
    output: "constructionstick:netherite_stick",
    items: ["constructionstick:diamond_stick", "minecraft:netherite_ingot"],
    id: "constructionstick:netherite_stick",
  },
];

ServerEvents.recipes((event) => {
  glidersShapelessRecipes.forEach((recipe) => {
    event.shapeless(recipe.output, recipe.items).id(recipe.id);
  });
});
