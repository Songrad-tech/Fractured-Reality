ServerEvents.recipes((event) => {
  event
    .custom({
      type: "create:crushing",
      ingredients: [item("kubejs:viridite")],
      processing_time: 250,
      results: [
        {
          chance: 0.4,
          id: "create:crushed_raw_nickel",
        },
        {
          chance: 0.4,
          id: "oritech:nickel_nugget",
        },
      ],
    })
    .id("kubejs:crushing/viridite");
});
