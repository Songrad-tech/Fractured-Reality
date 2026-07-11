StartupEvents.registry("item", (event) => {
  event
    .create("bunny_ears", "geckojs:anim_helmet")
    .displayName("Bunny Ears")
    .geoModel((geo) => {
      geo.setSimpleModel("geckojs:geo/bunny.geo.json");
      geo.setSimpleTexture("geckojs:textures/bunny.png");
    });
});
