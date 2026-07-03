ServerEvents.recipes((event) => {
  mechanicalCrafting(
    event,
    {
      key: {
        A: item("kubejs:fractured_ingot"),
        B: item("mysticalagriculture:hostile_soulium_dagger"),
        C: item("mysticalagriculture:soulium_dagger"),
        D: item("mysticalagriculture:passive_soulium_dagger"),
        E: item("oritech:duratium_block"),
      },
      pattern: [
        "     AA",
        "    ABA",
        "   ACA ",
        " EADA  ",
        "  EA   ",
        " E E   ",
        "E      ",
      ],
      result: "mysticalagriculture:creative_soulium_dagger",
    },
    "kubejs:mechanical_crafting/creative_soulium_dagger",
  );

  mechanicalCrafting(
    event,
    {
      key: {
        A: item("oritech:duratium_block"),
        B: item("kubejs:fractured_ingot"),
        C: item("oritech:promethium_axe"),
        D: item("create:cogwheel"),
        E: item("constructionstick:netherite_stick"),
        F: item("create:large_cogwheel"),
        G: item("create:wand_of_symmetry"),
        H: item("create:extendo_grip"),
        I: item("oritech:promethium_pickaxe"),
        J: item("oritech:silicon_block"),
      },
      pattern: [
        "AAAABBBBB",
        "CDEFGFHDI",
        "AAAABBBBB",
        "     JJJ ",
        "      JJJ",
      ],
      result: "create:handheld_worldshaper",
    },
    "kubejs:mechanical_crafting/handheld_worldshaper",
  );
});
