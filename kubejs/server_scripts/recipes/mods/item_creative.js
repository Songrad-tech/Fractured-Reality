ServerEvents.recipes((event) => {
  event
    .custom({
      type: "create:crushing",
      ingredients: [item("kubejs:fractured_ingot")],
      processing_time: 150,
      results: [countedResult("kubejs:fractured_flour", 1)],
    })
    .id("kubjs:crushing/fractured_flour");

  event
    .custom({
      type: "create:compacting",
      ingredients: [
        item("kubejs:fractured_flour"),
        item("minecraft:sugar"),
        item("create:dough"),
        tag("c:eggs"),
      ],
      results: [countedResult("kubejs:fractured_cake_base", 1)],
    })
    .id("kubejs:create/compacting/fractured_cake_base");

  event
    .custom({
      type: "create:filling",
      ingredients: [
        item("kubejs:fractured_cake_base"),
        fluid("the_bumblezone:royal_jelly_fluid_still", 1000),
      ],
      results: [countedResult("create:creative_blaze_cake", 1)],
    })
    .id("kubejs:create/filling/creative_blaze_cake");

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

  mechanicalCrafting(
    event,
    {
      key: {
        A: item("kubejs:fractured_ingot"),
        B: item("the_bumblezone:royal_jelly_block"),
        C: item("tempad:chronon_battery"),
        D: item("tempad:time_steel"),
        E: item("kubejs:nether_star_block"),
        F: item("tempad:chronometer"),
      },
      pattern: [
        "  AAA  ",
        " ABCBA ",
        "ABDEDBA",
        "ACEFECA",
        "ABDEDBA",
        " ABCBA ",
        "  AAA  ",
      ],
      result: "tempad:creative_chronometer",
    },
    "kubejs:mechanical_crafting/creative_chronometer",
  );

  mechanicalCrafting(
    event,
    {
      key: {
        A: item("kubejs:fractured_ingot"),
        B: item("the_bumblezone:royal_jelly_block"),
        C: item("functionalstorage:netherite_upgrade"),
        D: item("mysticalagriculture:awakened_supremium_upgrade"),
        E: item("kubejs:nether_star_block"),
        F: item("ae2:singularity"),
        G: item("minecraft:netherite_upgrade_smithing_template"),
      },
      pattern: ["AAAAA", "ACDCA", "ABEBA", "AFGFA", "ABEBA", "ACDCA", "AAAAA"],
      result: "functionalstorage:max_storage_upgrade",
    },
    "kubejs:mechanical_crafting/max_storage_upgrade",
  );

  mechanicalCrafting(
    event,
    {
      key: {
        A: item("kubejs:fractured_ingot"),
        B: item("the_bumblezone:royal_jelly_block"),
        C: item("functionalstorage:max_storage_upgrade"),
        D: item("sophisticatedbackpacks:stack_upgrade_omega_tier"),
        E: item("kubejs:nether_star_block"),
        F: item("ae2:singularity"),
        G: item("kubejs:fractured_casing"),
        H: item("minecraft:heavy_core"),
      },
      pattern: [
        "AAAAAAAAA",
        "ABBEEEBBA",
        "GGGGGGGGG",
        "GFEHFHEFG",
        "GHDCDCDHG",
        "GFEHFHEFG",
        "GGGGGGGGG",
        "ABBEEEBBA",
        "AAAAAAAAA",
      ],
      result: "create:creative_crate",
    },
    "kubejs:mechanical_crafting/creative_crate",
  );
});
