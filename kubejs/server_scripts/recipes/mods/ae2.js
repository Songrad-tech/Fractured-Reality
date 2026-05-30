const ae2RecipeRemovals = [
  "ae2:charger/charged_certus_quartz_crystal",
  "ae2:inscriber/engineering_processor_print",
  "ae2:inscriber/logic_processor_print",
  "ae2:misc/fluixpearl",
  "ae2:materials/annihilationcore",
  "ae2:network/blocks/controller",
  "ae2:network/blocks/storage_drive",
  "ae2:network/blocks/storage_chest",
  "ae2:network/blocks/inscribers",
  "ae2:network/crafting/molecular_assembler",
  "ae2:network/blocks/pattern_providers_interface",
  "ae2:network/blocks/energy_energy_cell",
  "ae2:network/blocks/quantum_link",
  "ae2wtlib:magnet_card",
];

const ae2NewRecipes = [
  {
    outputs: ["ae2:charger"],
    replacements: [
      ["minecraft:copper_ingot", "oritech:energite_ingot"],
      ["minecraft:iron_ingot", "oritech:adamant_ingot"],
    ],
  },
  {
    outputs: ["ae2:cell_workbench"],
    replacements: [["minecraft:iron_ingot", "oritech:adamant_ingot"]],
  },
  {
    outputs: ["ae2:spatial_io_port"],
    replacements: [["minecraft:iron_ingot", "oritech:adamant_ingot"]],
  },
  {
    outputs: ["ae2:io_port"],
    replacements: [["minecraft:iron_ingot", "oritech:adamant_ingot"]],
  },
  {
    outputs: ["ae2:crafting_unit"],
    replacements: [["minecraft:iron_ingot", "oritech:adamant_ingot"]],
  },
  {
    outputs: ["ae2:growth_accelerator"],
    replacements: [["minecraft:iron_ingot", "oritech:adamant_ingot"]],
  },
  {
    outputs: ["ae2:quantum_ring"],
    replacements: [["minecraft:iron_ingot", "oritech:adamant_ingot"]],
  },
  {
    outputs: ["ae2:condenser"],
    replacements: [["minecraft:iron_ingot", "oritech:adamant_ingot"]],
  },
  {
    outputs: ["ae2:interface"],
    replacements: [["minecraft:iron_ingot", "oritech:adamant_ingot"]],
  },
  {
    outputs: ["ae2:crystal_resonance_generator"],
    replacements: [
      ["minecraft:iron_ingot", "oritech:adamant_ingot"],
      ["minecraft:copper_ingot", "oritech:energite_ingot"],
    ],
  },
  {
    outputs: ["ae2:energy_acceptor"],
    replacements: [
      ["minecraft:iron_ingot", "oritech:adamant_ingot"],
      ["minecraft:copper_ingot", "oritech:energite_ingot"],
    ],
  },
  {
    outputs: ["ae2:vibration_chamber"],
    replacements: [
      ["minecraft:iron_ingot", "oritech:adamant_ingot"],
      ["minecraft:copper_ingot", "oritech:energite_ingot"],
      ["minecraft:furnace", "oritech:powered_furnace_block"],
    ],
  },
  {
    outputs: ["ae2:basic_card"],
    replacements: [
      ["minecraft:gold_ingot", "createaddition:electrum_ingot"],
      ["minecraft:redstone", "ae2:fluix_dust"],
    ],
  },
  {
    outputs: ["ae2:advanced_card"],
    replacements: [
      ["minecraft:diamond", "oritech:energite_ingot"],
      ["minecraft:redstone", "ae2:fluix_dust"],
    ],
  },
];

const pressRecipes = [
  ["ae2:silicon_press", tag("c:silicon")],
  ["ae2:logic_processor_press", item("create:electron_tube")],
  ["ae2:engineering_processor_press", item("create:precision_mechanism")],
  ["ae2:calculation_processor_press", item("create:brass_hand")],
];

const buddingRecipes = [
  {
    catalyst: "oritech:adamant_block",
    input: "ae2:certus_quartz_crystal",
    output: "ae2:damaged_budding_quartz",
  },
  {
    catalyst: "oritech:adamant_ingot",
    input: "ae2:damaged_budding_quartz",
    output: "ae2:chipped_budding_quartz",
  },
  {
    catalyst: "oritech:adamant_ingot",
    input: "ae2:chipped_budding_quartz",
    output: "ae2:flawed_budding_quartz",
  },
  {
    catalyst: "oritech:adamant_ingot",
    input: "ae2:flawed_budding_quartz",
    output: "ae2:flawless_budding_quartz",
  },
];

const ae2ShapeRecipes = [
  {
    output: "ae2:fluix_pearl",
    pattern: ["ABA", "BCB", "ABA"],
    keys: {
      A: "ae2:fluix_dust",
      B: "ae2:fluix_crystal",
      C: "kubejs:fractured_pearl",
    },
    id: "ae2:misc/fluixpearl",
  },
  {
    output: "2x ae2:annihilation_core",
    pattern: ["   ", "ABC", "   "],
    keys: {
      A: "kubejs:fractured_shard",
      B: "ae2:fluix_dust",
      C: "ae2:logic_processor",
    },
    id: "ae2:materials/annihilationcore",
  },
  {
    output: "ae2:controller",
    pattern: ["ABA", "BCB", "ADA"],
    keys: {
      A: "oritech:adamant_ingot",
      B: "ae2:fluix_crystal",
      C: "kubejs:fluix_core",
      D: "ae2:engineering_processor",
    },
    id: "ae2:network/blocks/controller",
  },
  {
    output: "ae2:drive",
    pattern: ["ABA", "CDC", "ABA"],
    keys: {
      A: "oritech:adamant_ingot",
      B: "ae2:engineering_processor",
      C: "ae2:fluix_glass_cable",
      D: "ironchest:diamond_chest",
    },
    id: "ae2:network/blocks/storage_drive",
  },
  {
    output: "ae2:chest",
    pattern: ["ABA", "CDC", "EFE"],
    keys: {
      A: "#c:glass_blocks",
      B: "ae2:terminal",
      C: "ae2:fluix_glass_cable",
      D: "ironchest:iron_chest",
      E: "oritech:adamant_ingot",
      F: "oritech:energite_ingot",
    },
    id: "ae2:network/blocks/storage_chest",
  },
  {
    output: "ae2:inscriber",
    pattern: ["ABA", "CDC", "ABA"],
    keys: {
      A: "oritech:adamant_ingot",
      B: "create:mechanical_press",
      C: "oritech:energite_ingot",
      D: "kubejs:fluix_core",
    },
    id: "ae2:network/blocks/inscribers",
  },
  {
    output: "ae2:molecular_assembler",
    pattern: ["ABA", "CDE", "ABA"],
    keys: {
      A: "oritech:adamant_ingot",
      B: "ae2:quartz_glass",
      C: "ae2:annihilation_core",
      D: "create:mechanical_crafter",
      E: "ae2:formation_core",
    },
    id: "ae2:network/crafting/molecular_assembler",
  },
  {
    output: "ae2:pattern_provider",
    pattern: ["ABA", "CDE", "ABA"],
    keys: {
      A: "oritech:adamant_ingot",
      B: "create:mechanical_crafter",
      C: "ae2:annihilation_core",
      D: "kubejs:fluix_core",
      E: "ae2:formation_core",
    },
    id: "ae2:network/blocks/pattern_providers_interface",
  },
  {
    output: "ae2:energy_cell",
    pattern: ["ABA", "CDC", "ABA"],
    keys: {
      A: "oritech:adamant_ingot",
      B: "ae2:fluix_dust",
      C: "oritech:energite_ingot",
      D: "createaddition:modular_accumulator",
    },
    id: "ae2:network/blocks/energy_energy_cell",
  },
  {
    output: "ae2:quantum_link",
    pattern: ["ABA", "BCB", "ABA"],
    keys: {
      A: "ae2:quartz_glass",
      B: "ae2:fluix_pearl",
      C: "kubejs:fractured_shard",
    },
    id: "ae2:network/blocks/quantum_link",
  },
];

ServerEvents.recipes((event) => {
  removeRecipes(event, ae2RecipeRemovals);
  replaceInputFromRecipes(event, ae2NewRecipes);

  pressRecipes.forEach(([output, middle]) => {
    event
      .custom({
        type: "ae2:inscriber",
        ingredients: {
          middle: middle,
          top: item("ae2:charged_certus_quartz_crystal"),
          bottom: item("kubejs:fluix_core"),
        },
        mode: "inscribe",
        result: countedResult(output, 1),
      })
      .id(`kubejs:ae2/inscriber/${output.split(":")[1]}`);
  });

  event
    .shapeless("ae2:certus_quartz_crystal", [
      "minecraft:quartz",
      "ae2:sky_dust",
    ])
    .id("kubejs:ae2/certus_quartz_crystal_from_quartz");

  event
    .shapeless("ae2wtlib:magnet_card", [
      "oritech:magnetic_coil",
      "ae2:advanced_card",
    ])
    .id("ae2wtlib:magnet_card");

  buddingRecipes.forEach((budding) => {
    event
      .custom({
        type: "ae2:transform",
        ingredients: [
          item("ae2:certus_quartz_crystal"),
          item(budding.catalyst),
          item(budding.input),
        ],
        result: countedResult(budding.output, 1),
      })
      .id(`kubejs:ae2/transform/${budding.output.split(":")[1]}`);
  });

  event
    .custom({
      type: "ae2:inscriber",
      ingredients: {
        middle: item("createaddition:electrum_ingot"),
        top: item("ae2:logic_processor_press"),
      },
      mode: "inscribe",
      result: countedResult("ae2:printed_logic_processor", 1),
    })
    .id("ae2:inscriber/logic_processor_print");

  event
    .custom({
      type: "ae2:inscriber",
      ingredients: {
        middle: item("oritech:platinum_ingot"),
        top: item("ae2:engineering_processor_press"),
      },
      mode: "inscribe",
      result: countedResult("ae2:printed_engineering_processor", 1),
    })
    .id("ae2:inscriber/engineering_processor_print");

  ae2ShapeRecipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.keys).id(recipe.id);
  });
});
