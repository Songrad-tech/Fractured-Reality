// Discovery is personal and permanent: losing an eye never undoes progress.
const SCENARIO_EYE_WHISPERS = {
  "endrem:charged_electrical_eye":
    "Lightning stirs within this eye. The world's scattered power remembers how to flow.",
  "endrem:digital_eye":
    "Countless threads of encoded knowledge converge. Within this eye, the world remembers its own design.",
  "endrem:echo_eye":
    "An echo rises from beyond the darkness. Something that once answered the world is answering again.",
  "endrem:essence_eye":
    "Life pulses beneath the fractures. This eye carries the warmth of a world still refusing to fade.",
  "endrem:fractured_eye":
    "A shard of shattered reality rests in your hand. Even broken, the world remembers being whole.",
  "endrem:honey_eye":
    "The ancient hive has shared its treasure. A thousand small lives have guarded this fragment for you.",
  "endrem:machine_eye":
    "Deep within the machine, a purpose endured. This eye carries the patient heartbeat of its creation.",
  "endrem:mechanical_eye":
    "Gears turn, and scattered pieces find their place. Through this eye, the world remembers the hands that shaped it.",
  "endrem:memory_eye":
    "Forgotten paths flicker behind the glass. Every step has left a memory, and none of yours were in vain.",
  "endrem:under_eye":
    "The depths surrender what they have kept for ages. Beneath the world's wounds, a fragment waited to be found.",
  "endrem:time_eye":
    "For a moment, time holds its breath. This eye remembers a rhythm the fracture could not silence.",
  "endrem:network_eye":
    "Unseen currents reach across the distance. Through this eye, the separated pieces of the world can feel one another again.",
};

const SCENARIO_EYE_IDS = Object.keys(SCENARIO_EYE_WHISPERS);
const SCENARIO_EYE_KEY_PREFIX = "fracturedEyeFound:";
const SCENARIO_EYE_DIALOGUES = {};
const SCENARIO_EYE_WHISPER_DELAY = 20;
const SCENARIO_EYE_THOUGHT_DELAY = 80;
const SCENARIO_EYE_DIALOGUE_DURATION = 110;

// Indexed by the number of unique eyes still missing, regardless of discovery order.
const SCENARIO_EYE_THOUGHTS = [
  "Zero left. All twelve... I did it! I actually did it! At last, I can take the next step!",
  "Only 1 eye left! Just one! I'm so close I can hardly believe it!",
  "Only 2 eyes left! Almost there. I can do this!",
  "Only 3 eyes left! Nine already... this is really happening!",
  "4 eyes left! I've come so far. I can almost picture them all together!",
  "5 eyes left! More behind me than ahead. I'm really getting somewhere!",
  "6 eyes left. Halfway there! For the first time, this feels possible.",
  "7 eyes left. Another one! I'm starting to believe I can find them all.",
  "8 eyes left. Four already... I'm getting better at this.",
  "9 eyes left. Three found. Maybe I really can follow this trail.",
  "10 eyes left. So the first wasn't a coincidence. That's encouraging.",
  "11 eyes left. That's one... a beginning. Let's see where this leads.",
];

function syncScenarioEyeCounter(player) {
  let remaining = SCENARIO_EYE_IDS.length;
  SCENARIO_EYE_IDS.forEach((id) => {
    if (player.persistentData.getBoolean(SCENARIO_EYE_KEY_PREFIX + id))
      remaining--;
  });
  // Derive the counter from discoveries: zero must never be reset to twelve.
  player.persistentData.putInt("eyeCounter", remaining);
  return remaining;
}

function discoverScenarioEye(player, item) {
  if (item.count <= 0 || SCENARIO_EYE_IDS.indexOf(item.id) === -1) return;

  const key = SCENARIO_EYE_KEY_PREFIX + item.id;
  if (player.persistentData.getBoolean(key)) return;

  // Save before sending messages so repeated inventory events cannot announce twice.
  player.persistentData.putBoolean(key, true);
  const remaining = syncScenarioEyeCounter(player);
  const name = player.username;
  if (!SCENARIO_EYE_DIALOGUES[name]) SCENARIO_EYE_DIALOGUES[name] = [];
  const queue = SCENARIO_EYE_DIALOGUES[name];
  // Capture the text now: the inventory stack may change before the dialogue runs.
  queue.push({
    player: player,
    whisper: SCENARIO_EYE_WHISPERS[item.id],
    remaining: remaining,
  });
  if (queue.length === 1) playScenarioEyeDialogue(name);
}

function playScenarioEyeDialogue(name) {
  const queue = SCENARIO_EYE_DIALOGUES[name];
  const dialogue = queue[0];
  const player = dialogue.player;
  const server = player.server;
  // Close on the next tick, after the inventory transfer has completed.
  server.scheduleInTicks(1, () => {
    if (!player.isRemoved()) player.closeContainer();
  });
  server.scheduleInTicks(SCENARIO_EYE_WHISPER_DELAY, () => {
    if (!player.isRemoved()) sendScenarioEyeWhisper(player, dialogue.whisper);
  });
  server.scheduleInTicks(SCENARIO_EYE_THOUGHT_DELAY, () => {
    if (!player.isRemoved()) sendScenarioEyeThought(player, dialogue.remaining);
  });
  // Keep multiple discoveries in order instead of overlapping their messages.
  server.scheduleInTicks(SCENARIO_EYE_DIALOGUE_DURATION, () => {
    queue.shift();
    if (queue.length > 0) playScenarioEyeDialogue(name);
    else delete SCENARIO_EYE_DIALOGUES[name];
  });
}

function sendScenarioEyeWhisper(player, whisper) {
  const name = player.username;
  player.server.runCommandSilent(
    `tellraw ${name} ${JSON.stringify([
      { text: "Quest books whispers to you: ", color: "gray", italic: true },
      { text: whisper, color: "light_purple", italic: true },
    ])}`,
  );
}

function sendScenarioEyeThought(player, remaining) {
  const name = player.username;
  player.server.runCommandSilent(
    `tellraw ${name} ${JSON.stringify([
      { text: "[Thought] ", color: "dark_gray", italic: true },
      {
        text: SCENARIO_EYE_THOUGHTS[remaining],
        color: remaining === 0 ? "gold" : remaining <= 5 ? "green" : "gray",
        italic: true,
      },
    ])}`,
  );
}

SCENARIO_EYE_IDS.forEach((id) => {
  PlayerEvents.inventoryChanged(id, (event) => {
    discoverScenarioEye(event.player, event.item);
  });
});

PlayerEvents.loggedIn((event) => {
  const player = event.player;
  syncScenarioEyeCounter(player);
  // Also discover eyes already held when this script is first installed.
  const inventory = player.inventory;
  for (let slot = 0; slot < inventory.getSlots(); slot++) {
    discoverScenarioEye(player, inventory.getStackInSlot(slot));
  }
  discoverScenarioEye(player, player.getOffhandItem());
});

PlayerEvents.cloned((event) => {
  SCENARIO_EYE_IDS.forEach((id) => {
    const key = SCENARIO_EYE_KEY_PREFIX + id;
    if (event.oldPlayer.persistentData.getBoolean(key)) {
      event.player.persistentData.putBoolean(key, true);
    }
  });
  syncScenarioEyeCounter(event.player);
});
