console.log("[Fractured Reality] intro.js loaded");

PlayerEvents.loggedIn((event) => {
  const player = event.player;
  const server = event.server;
  const name = player.username;

  if (player.persistentData.fracturedIntroPlayed) return;
  player.persistentData.fracturedIntroPlayed = true;

  console.log(`[Fractured Reality] Starting intro for ${name}`);

  const schedule = (tick, action) => {
    server.scheduleInTicks(tick, action);
  };

  const command = (value) => {
    server.runCommandSilent(value);
  };

  const atPlayer = (value) => {
    command(`execute at ${name} run ${value}`);
  };

  const sound = (id, volume, pitch) => {
    atPlayer(`playsound ${id} master ${name} ~ ~ ~ ${volume} ${pitch}`);
  };

  const title = (main, subtitle, color) => {
    command(
      `title ${name} subtitle ${JSON.stringify({
        text: subtitle,
        color: "gray",
        italic: true,
      })}`,
    );
    command(
      `title ${name} title ${JSON.stringify({
        text: main,
        color: color,
        bold: true,
      })}`,
    );
  };

  const thought = (text) => {
    command(
      `tellraw ${name} ${JSON.stringify([
        { text: "[Thought] ", color: "dark_gray", italic: true },
        { text: text, color: "gray", italic: true },
      ])}`,
    );
  };

  // Let the world finish appearing before taking control of the atmosphere.
  command(`effect give ${name} minecraft:blindness 15 0 true`);
  command(`effect give ${name} minecraft:slowness 8 4 true`);
  sound("minecraft:ambient.cave", 0.35, 0.5);

  // The cracks begin far apart, then collapse into one another.
  const cracks = [
    { tick: 30, pitch: 0.45, volume: 0.35 },
    { tick: 64, pitch: 0.52, volume: 0.45 },
    { tick: 90, pitch: 0.61, volume: 0.55 },
    { tick: 110, pitch: 0.72, volume: 0.65 },
    { tick: 125, pitch: 0.84, volume: 0.75 },
    { tick: 136, pitch: 0.98, volume: 0.9 },
  ];

  cracks.forEach((crack, index) => {
    schedule(crack.tick, () => {
      sound("minecraft:block.glass.break", crack.volume, crack.pitch);

      if (index >= 3) {
        atPlayer(
          `particle minecraft:electric_spark ~ ~1.4 ~ 0.35 0.45 0.35 0.08 ${4 + index * 2} force ${name}`,
        );
      }
    });
  });

  // At the climax, the fracture bursts into a shower of falling shards.
  const shatterBurst = [
    { tick: 144, pitch: 0.55, volume: 0.8, x: -0.8, y: 2.2, z: 0.3 },
    { tick: 147, pitch: 1.25, volume: 0.65, x: 0.7, y: 2.8, z: -0.4 },
    { tick: 150, pitch: 0.75, volume: 1.0, x: 0.1, y: 3.2, z: 0.8 },
    { tick: 153, pitch: 1.55, volume: 0.7, x: -0.5, y: 2.5, z: -0.8 },
    { tick: 156, pitch: 0.95, volume: 0.9, x: 0.9, y: 2.1, z: 0.2 },
    { tick: 160, pitch: 1.75, volume: 0.55, x: -0.2, y: 3.5, z: 0.5 },
    { tick: 165, pitch: 0.65, volume: 0.8, x: 0.4, y: 2.7, z: -0.9 },
    { tick: 171, pitch: 1.35, volume: 0.6, x: -0.9, y: 2.3, z: -0.2 },
    { tick: 178, pitch: 0.85, volume: 0.7, x: 0.6, y: 3.0, z: 0.7 },
  ];

  shatterBurst.forEach((shard, index) => {
    schedule(shard.tick, () => {
      atPlayer(
        `playsound minecraft:block.glass.break master ${name} ~${shard.x} ~${shard.y} ~${shard.z} ${shard.volume} ${shard.pitch}`,
      );

      atPlayer(
        `particle minecraft:item{item:{id:"minecraft:glass"}} ~${shard.x} ~${shard.y} ~${shard.z} 0.3 0.45 0.3 0.12 ${8 + index * 2} force ${name}`,
      );
    });
  });

  // A short warning before the rupture gives the climax room to land.
  schedule(102, () => {
    command(
      `title ${name} actionbar ${JSON.stringify({
        text: "Something is wrong.",
        color: "dark_gray",
        italic: true,
      })}`,
    );
  });

  schedule(150, () => {
    sound("minecraft:block.glass.break", 1.4, 0.4);
    sound("minecraft:block.amethyst_block.break", 1.0, 0.55);
    sound("minecraft:entity.lightning_bolt.thunder", 0.35, 0.55);
    sound("minecraft:block.respawn_anchor.deplete", 0.8, 0.65);
    sound("minecraft:entity.warden.heartbeat", 0.7, 0.7);

    atPlayer(`particle minecraft:flash ~ ~1.4 ~ 0 0 0 0 1 force ${name}`);
    atPlayer(
      `particle minecraft:reverse_portal ~ ~1.2 ~ 0.8 1 0.8 0.08 80 force ${name}`,
    );

    title("THE SKY FRACTURED", "And something looked back.", "dark_purple");
  });

  schedule(235, () => {
    command(`effect clear ${name} minecraft:blindness`);
    command(`effect clear ${name} minecraft:slowness`);
  });

  schedule(285, () => {
    command(`title ${name} clear`);
    thought("That was not thunder...");
  });

  schedule(300, () => {
    thought("I need to understand what happened.");
  });

  // End on a tangible mystery that naturally points toward the quest book.
  schedule(400, () => {
    sound("minecraft:block.end_portal_frame.fill", 0.8, 0.55);
    sound("minecraft:entity.allay.item_given", 0.7, 0.75);

    atPlayer(
      `particle minecraft:reverse_portal ~ ~1 ~ 0.35 0.5 0.35 0.03 45 force ${name}`,
    );
    command(`give ${name} ftbquests:book`);
  });

  schedule(415, () => {
    thought("This book... What is this?");
    command(
      `title ${name} actionbar ${JSON.stringify({
        text: "The first fracture has opened.",
        color: "light_purple",
        italic: true,
      })}`,
    );
  });
});
