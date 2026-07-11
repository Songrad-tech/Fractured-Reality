const FRACTURED_ARMOR_ITEMS = [
  "kubejs:fractured_helmet",
  "kubejs:fractured_chestplate",
  "kubejs:fractured_leggings",
  "kubejs:fractured_boots",
];

const FRACTURED_ARMOR_BONUSES = {
  "kubejs:fractured_helmet": "Helmet: grants night vision",
  "kubejs:fractured_boots": "Boots: negates fall damage",
};

ItemEvents.modifyTooltips((event) => {
  event.modify("kubejs:fractured_shovel", (tooltip) => {
    tooltip.insert(1, [
      Text.of("End-game relic tier").color("dark_purple"),
      Text.of("Unbreakable tool").color("gray"),
    ]);
  });

  FRACTURED_ARMOR_ITEMS.forEach((item) => {
    event.modify(item, (tooltip) => {
      tooltip.insert(1, [
        Text.of("End-game relic tier").color("dark_purple"),
        Text.of("Full set: grants creative-style flight").color("aqua"),
        Text.of("Full set: immune to fire and lava").color("gold"),
        Text.of("Full set: cleanses poison and wither").color("green"),
        Text.of("Unbreakable armor").color("gray"),
      ]);

      if (FRACTURED_ARMOR_BONUSES[item]) {
        tooltip.insert(3, [
          Text.of(FRACTURED_ARMOR_BONUSES[item]).color("#ff99ff"),
        ]);
      }
    });
  });
});
