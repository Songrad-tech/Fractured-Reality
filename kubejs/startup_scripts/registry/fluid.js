StartupEvents.registry("fluid", (event) => {
  event
    .create("fractured_essence")
    .stillTexture(`${FRACTURED_MOD_ID}:block/fractured_essence_still`)
    .flowingTexture(`${FRACTURED_MOD_ID}:block/fractured_essence_flow`);
});
