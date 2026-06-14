ServerEvents.recipes((event) => {
  event.shaped("endrem:time_eye", ["AAA", "BCB", "ADA"], {
    A: "tempad:time_steel",
    B: "tempad:chronon_battery",
    C: "kubejs:fractured_pearl",
    D: "tempad:chronometer",
  });

  event.custom({
    type: "ae2:transform",
    circumstance: {
      type: "fluid",
      tag: "c:strange_matter",
    },
    ingredients: [
      item("kubejs:fractured_pearl"),
      item("kubejs:fractured_singularity_block"),
      item("ae2:fluix_dust"),
    ],
    result: {
      count: 1,
      id: "endrem:fractured_eye",
    },
  });

  sequencedAssembly(
    event,
    {
      id: "kubejs:sequenced_assembly/mechanical_eye",
      ingredient: item("kubejs:fractured_pearl"),
      transitionalItem: "kubejs:partial_mechanical_eye",
      results: [result("endrem:mechanical_eye")],
      loops: 2,
      sequence: [
        deploying(
          "kubejs:partial_mechanical_eye",
          item("kubejs:andesite_core"),
        ),
        pressing("kubejs:partial_mechanical_eye"),
        deploying("kubejs:partial_mechanical_eye", item("kubejs:copper_core")),
        pressing("kubejs:partial_mechanical_eye"),
        deploying("kubejs:partial_mechanical_eye", item("kubejs:brass_core")),
        pressing("kubejs:partial_mechanical_eye"),
      ],
    },
    "kubejs:sequenced_assembly/mechanical_eye",
  );

  event.custom({
    type: "undergarden:infuser_conversion",
    category: "corrupting",
    experience: 2.0,
    infusing_time: 300,
    ingredient: {
      item: "kubejs:fractured_pearl",
    },
    result: {
      count: 1,
      id: "kubejs:partial_under_eye",
    },
    slot_type: "utherium",
  });

  event.custom({
    type: "undergarden:infuser_conversion",
    category: "purifying",
    experience: 2.0,
    infusing_time: 300,
    ingredient: {
      item: "kubejs:partial_under_eye",
    },
    result: {
      count: 1,
      id: "endrem:under_eye",
    },
    slot_type: "rogdorium",
  });

  event.shaped("kubejs:electrical_eye", ["ABA", "BCB", "ABA"], {
    A: "createaddition:electrum_sheet",
    B: "createaddition:electrum_spool",
    C: "kubejs:fractured_pearl",
  });

  event.custom({
    type: "createaddition:charging",
    energy: 648000,
    ingredients: [
      {
        item: "kubejs:electrical_eye",
      },
    ],
    max_charge_rate: 360,
    results: [
      {
        id: "endrem:charged_electrical_eye",
      },
    ],
  });

  event
    .custom({
      type: "mysticalagriculture:awakening",
      essences: [
        {
          id: "mysticalagriculture:air_essence",
          count: 20,
        },
        {
          id: "mysticalagriculture:earth_essence",
          count: 20,
        },
        {
          id: "mysticalagriculture:water_essence",
          count: 20,
        },
        {
          id: "mysticalagriculture:fire_essence",
          count: 20,
        },
      ],
      input: item("kubejs:fractured_pearl"),
      ingredients: [
        item("mysticalagriculture:supremium_ingot"),
        item("mysticalagriculture:supremium_gemstone"),
        item("mysticalagriculture:supremium_ingot"),
        item("mysticalagriculture:supremium_gemstone"),
      ],
      result: {
        id: "endrem:essence_eye",
      },
    })
    .id("kubejs:awakening/essence_eye");

  event
    .custom({
      type: "oritech:atomic_forge",
      ingredients: [
        item("kubejs:fractured_pearl"),
        item("oritech:prometheum_ingot"),
        item("oritech:plutonium_pellet"),
      ],
      results: [
        {
          count: 1,
          id: "endrem:machine_eye",
        },
      ],
      time: 400,
    })
    .id("kubejs:atomic_forge/machine_eye");

  event
    .custom({
      type: "mysticalagriculture:infusion",
      input: item("kubejs:fractured_pearl"),
      ingredients: [
        item("undergarden:utherium_crystal"),
        item("mysticalagriculture:supremium_ingot"),
        item("ae2:charged_certus_quartz_crystal"),
        item("oritech:energite_ingot"),
        item("createaddition:electrum_ingot"),
        item("create:brass_ingot"),
        item("the_bumblezone:honey_crystal_shards"),
        item("deeperdarker:soul_crystal"),
      ],
      result: {
        count: 1,
        id: "endrem:memory_eye",
      },
    })
    .id("kubejs:infusion/memory_eye");
});
