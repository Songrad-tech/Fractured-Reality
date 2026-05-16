console.log("[Fractured Reality] intro.js loaded");

PlayerEvents.loggedIn((event) => {
  console.log("[Fractured Reality] Player logged in: " + event.player.username);

  const player = event.player;
  const server = event.server;

  if (player.persistentData.fracturedIntroPlayed) return;
  player.persistentData.fracturedIntroPlayed = true;

  server.runCommandSilent(
    `effect give ${player.username} minecraft:blindness 7 0 true`,
  );

  const cracks = [10, 16, 22, 28, 34, 40, 46, 52, 58, 64];

  cracks.forEach((tick, index) => {
    const pitch = 0.6 + index * 0.05;

    server.scheduleInTicks(tick, () => {
      server.runCommandSilent(
        `execute at ${player.username} run playsound minecraft:block.glass.break master ${player.username} ~ ~ ~ 0.9 ${pitch}`,
      );
    });
  });

  server.scheduleInTicks(120, () => {
    server.runCommandSilent(
      `effect clear ${player.username} minecraft:blindness`,
    );
  });

  server.scheduleInTicks(140, () => {
    server.runCommandSilent(
      `title ${player.username} actionbar {"text":"...What was that...?","color":"gray","italic":true}`,
    );
  });

  server.scheduleInTicks(240, () => {
    server.runCommandSilent(
      `title ${player.username} actionbar {"text":"It sounded like the sky was breaking.","color":"dark_purple","italic":true}`,
    );
  });

  server.scheduleInTicks(320, () => {
    player.tell("§8[Thought] §7I need to understand what happened.");
  });

  server.scheduleInTicks(360, () => {
    server.runCommandSilent(
      `execute at ${player.username} run playsound minecraft:block.end_portal_frame.fill master ${player.username} ~ ~ ~ 0.7 0.6`,
    );

    server.runCommandSilent(
      `execute at ${player.username} run playsound minecraft:entity.evoker.prepare_attack master ${player.username} ~ ~ ~ 0.4 1.4`,
    );

    server.runCommandSilent(
      `execute at ${player.username} run particle minecraft:reverse_portal ~ ~1 ~ 0.3 0.5 0.3 0.02 40 force`,
    );

    server.runCommandSilent(`give ${player.username} ftbquests:book`);

    player.tell("§8[Thought] §7 What is this book...?");
  });
});
