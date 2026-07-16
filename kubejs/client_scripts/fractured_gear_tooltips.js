const FRACTURED_ARMOR_ITEMS = [
  "kubejs:fractured_helmet",
  "kubejs:fractured_chestplate",
  "kubejs:fractured_leggings",
  "kubejs:fractured_boots",
];

const FRACTURED_ARMOR_BONUSES = {
  "kubejs:fractured_helmet": [
    "Helmet: grants night vision",
    "Helmet: grants water breathing",
  ],
  "kubejs:fractured_leggings": [
    "Leggings: grants speed II",
    "Leggings: grants haste II",
  ],
  "kubejs:fractured_boots": ["Boots: negates fall damage"],
};

const FRACTURED_GEAR_ITEMS = [
  "kubejs:fractured_shovel",
  "kubejs:fractured_axe",
  "kubejs:fractured_pickaxe",
  "kubejs:fractured_hoe",
];

ItemEvents.modifyTooltips((event) => {
  FRACTURED_GEAR_ITEMS.forEach((item) => {
    event.modify(item, (tooltip) => {
      tooltip.insert(1, [
        Text.of("End-game relic tier").color("dark_purple"),
        Text.of("Unbreakable tool").color("gray"),
      ]);
    });
  });

  FRACTURED_ARMOR_ITEMS.forEach((item) => {
    event.modify(item, (tooltip) => {
      tooltip.insert(1, [
        Text.of("End-game relic tier").color("dark_purple"),
        Text.of("Full set: grants creative-style flight").color("aqua"),
        Text.of("Full set: immune to fire and lava").color("gold"),
        Text.of("Full set: grants absorption II").color("yellow"),
        Text.of("Full set: cleanses poison and wither").color("green"),
        Text.of("Unbreakable armor").color("gray"),
      ]);

      if (FRACTURED_ARMOR_BONUSES[item]) {
        tooltip.insert(
          2,
          FRACTURED_ARMOR_BONUSES[item].map((bonus) =>
            Text.of(bonus).color("#ff99ff"),
          ),
        );
      }
    });
  });
});
