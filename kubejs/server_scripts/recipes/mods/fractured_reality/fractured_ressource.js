ServerEvents.recipes((event) => {
  event.custom({
    type: "oritech:laser",
    ingredients: [item("kubejs:fractured_cluster")],
    results: [countedResult("kubejs:fractured_shard", 3)],
    time: 1,
  });

  event.shaped("kubejs:fractured_block", ["AA", "AA"], {
    A: "kubejs:fractured_shard",
  });

  event.custom({
    type: "functionalstorage:custom_compacting",
    higher_input: countedResult("kubejs:fractured_block", 1),
    lower_input: countedResult("kubejs:fractured_shard", 4),
  });

  event.custom({
    type: "create:crushing",
    ingredients: [item("kubejs:fractured_block")],
    processing_time: 150,
    results: [
      countedResult("kubejs:fractured_shard", 3),
      chanceResult("kubejs:fractured_shard", 0.5),
    ],
  });

  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [item("kubejs:fractured_block")],
    result: [
      {
        item: countedResult("kubejs:fractured_shard", 4),
      },
    ],
    tool: [
      {
        type: "farmersdelight:item_ability",
        action: "pickaxe_dig",
      },
      tag("minecraft:pickaxes"),
    ],
  });

  event.custom({
    type: "ae2:transform",
    circumstance: {
      type: "fluid",
      tag: "c:strange_matter",
    },
    ingredients: [
      item("kubejs:fractured_shard"),
      item("oritech:energite_block"),
    ],
    result: {
      count: 1,
      id: "kubejs:budding_fractured",
    },
  });

  event.custom({
    type: "ae2:transform",
    circumstance: {
      type: "fluid",
      tag: "c:strange_matter",
    },
    ingredients: [
      item("kubejs:fractured_shard"),
      item("minecraft:ender_pearl"),
    ],
    result: {
      count: 1,
      id: "kubejs:fractured_pearl",
    },
  });

  event
    .custom({
      type: "create:item_application",
      ingredients: [item("kubejs:fractured_block"), item("ae2:singularity")],
      results: [result("kubejs:fractured_singularity_block")],
    })
    .id("kubejs:item_application/fractured_singularity_block");

  event
    .custom({
      type: "create:mixing",
      heat_requirement: "superheated",
      ingredients: [
        item("kubejs:fractured_dragon_heart"),
        {
          type: "neoforge:tag",
          amount: 1000,
          tag: "c:strange_matter",
        },
      ],
      results: [
        {
          amount: 1000,
          id: "kubejs:fractured_essence",
        },
        result("kubejs:fractured_dragon_heart"),
      ],
    })
    .id("kubejs:mixing/fractured_essence");

  event
    .custom({
      type: "create:filling",
      ingredients: [
        item("minecraft:netherite_ingot"),
        fluid("kubejs:fractured_essence", 250),
      ],
      results: [result("kubejs:fractured_ingot")],
    })
    .id("kubejs:filling/fractured_ingot");
});
