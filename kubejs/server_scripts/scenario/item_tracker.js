// Major discoveries are personal narrative milestones, not a linear counter.
const SCENARIO_ITEM_DIALOGUES = [
  {
    item: "kubejs:fractured_shard",
    messages: [
      { speaker: "book", text: "A crystalline manifestation of the fractures. Handle it carefully; its influence may be more dangerous than it appears." },
      { speaker: "player", text: "Strange... the crystal doesn't seem toxic. It almost feels dormant." },
    ],
  },
  {
    item: "kubejs:andesite_core",
    messages: [{ speaker: "book", text: "The Andesite Core. With it, motion itself can be harnessed and shaped into machinery. Let us see whether you can master it." }],
  },
  {
    item: "kubejs:copper_core",
    messages: [{ speaker: "book", text: "The Copper Core brings liquids under mechanical control. Pipes, pumps, and tanks now answer to your designs. Try not to drown in your own ambition." }],
  },
  {
    item: "kubejs:brass_core",
    messages: [{ speaker: "book", text: "The Brass Core, final pillar of the Mechanical Age. Your machines can now think in sequences, sort with purpose, and build with precision. You are progressing well." }],
  },
  {
    item: "kubejs:electrum_core",
    messages: [{ speaker: "book", text: "The Electrum Core... electricity condensed into a stable heart. Your world has taken its first true step beyond the age of motion." }],
  },
  {
    item: "oritech:laser_arm_block",
    messages: [
      { speaker: "book", text: "You command lasers now? And what exactly do you intend to shape with such power... more fractures?" },
      { speaker: "player", text: "Why would it think I want more fractures? This book isn't telling me everything." },
    ],
  },
  {
    item: "kubejs:fluix_core",
    messages: [{ speaker: "book", text: "The Fluix Core. Some claim a mind stirs within its crystalline network. Will you command that consciousness... or merely give it a way to command you?" }],
  },
  {
    item: "ae2:singularity",
    messages: [
      { speaker: "book", text: "A singularity?! You have compressed matter beyond reason itself. I did not expect you to come this far... but one will not be enough." },
      { speaker: "player", text: "Why does that surprise it? It guided me here. And why would I need more than one?" },
    ],
  },
  {
    item: "mysticalagriculture:infusion_altar",
    messages: [{ speaker: "book", text: "So this is your answer to scarcity. After learning to compress matter, you now intend to cultivate it. A garden fed by impossibility." }],
  },
  {
    item: "mysticalagriculture:awakening_altar",
    messages: [
      { speaker: "book", text: "An Awakening Altar? You can already grow almost anything this world can offer. What could you possibly intend to awaken with it?" },
      { speaker: "player", text: "Strange... even the book doesn't know what this altar will unlock." },
    ],
  },
  {
    item: "kubejs:fractured_dragon_heart",
    messages: [
      { speaker: "book", text: "You... you succeeded. You freed the dragon, but at what cost? Do you truly believe its death will stop the fractures? No. You have only made them worse, you fool!" },
      { speaker: "heart", text: "There is still a way. Take my place. Become the guardian this reality needs." },
      { speaker: "player", text: "That voice came from the heart... and a new chapter has appeared in the book." },
    ],
  },
  {
    item: "kubejs:fractured_ingot",
    messages: [{ speaker: "book", text: "What are you trying to create?! This reality is already collapsing because of you. Abandon this path. You will never wield enough power to save it!" }],
  },
  {
    item: "kubejs:fractured_core",
    messages: [
      { speaker: "book", text: "That core does not belong to this reality... Perhaps it belongs to none. Do you truly believe it can complete your impossible design? Then show me." },
      { speaker: "player", text: "I intend to." },
    ],
  },
];

const SCENARIO_ITEM_BY_ID = {};
SCENARIO_ITEM_DIALOGUES.forEach((dialogue) => {
  SCENARIO_ITEM_BY_ID[dialogue.item] = dialogue;
});

const SCENARIO_ITEM_IDS = Object.keys(SCENARIO_ITEM_BY_ID);
const SCENARIO_ITEM_KEY_PREFIX = "fracturedMilestoneFound:";
const SCENARIO_ITEM_QUEUES = {};
const SCENARIO_ITEM_FIRST_MESSAGE_DELAY = 20;
const SCENARIO_ITEM_MESSAGE_INTERVAL = 60;
const SCENARIO_ITEM_END_DELAY = 30;

function discoverScenarioItem(player, item) {
  if (item.count <= 0) return;
  const dialogue = SCENARIO_ITEM_BY_ID[item.id];
  if (!dialogue) return;

  const key = SCENARIO_ITEM_KEY_PREFIX + item.id;
  if (player.persistentData.getBoolean(key)) return;

  // Persist first so repeated inventory events cannot enqueue the scene twice.
  player.persistentData.putBoolean(key, true);
  const name = player.username;
  if (!SCENARIO_ITEM_QUEUES[name]) SCENARIO_ITEM_QUEUES[name] = [];
  const queue = SCENARIO_ITEM_QUEUES[name];
  queue.push({ player: player, messages: dialogue.messages });
  if (queue.length === 1) playScenarioItemDialogue(name);
}

function playScenarioItemDialogue(name) {
  const queue = SCENARIO_ITEM_QUEUES[name];
  const dialogue = queue[0];
  const player = dialogue.player;
  const server = player.server;

  dialogue.messages.forEach((message, index) => {
    const delay = SCENARIO_ITEM_FIRST_MESSAGE_DELAY + index * SCENARIO_ITEM_MESSAGE_INTERVAL;
    server.scheduleInTicks(delay, () => {
      if (!player.isRemoved()) sendScenarioItemMessage(player, message);
    });
  });

  const duration = SCENARIO_ITEM_FIRST_MESSAGE_DELAY + dialogue.messages.length * SCENARIO_ITEM_MESSAGE_INTERVAL + SCENARIO_ITEM_END_DELAY;
  server.scheduleInTicks(duration, () => {
    queue.shift();
    if (queue.length > 0) playScenarioItemDialogue(name);
    else delete SCENARIO_ITEM_QUEUES[name];
  });
}

function sendScenarioItemMessage(player, message) {
  const styles = {
    book: { label: "Quest Book whispers to you: ", labelColor: "dark_purple", textColor: "light_purple" },
    heart: { label: "The Dragon's Heart whispers: ", labelColor: "dark_red", textColor: "gold" },
    player: { label: "[Thought] ", labelColor: "dark_gray", textColor: "gray" },
  };
  const style = styles[message.speaker];
  player.server.runCommandSilent(
    `tellraw ${player.username} ${JSON.stringify([
      { text: style.label, color: style.labelColor, italic: true },
      { text: message.text, color: style.textColor, italic: true },
    ])}`,
  );
}

SCENARIO_ITEM_IDS.forEach((id) => {
  PlayerEvents.inventoryChanged(id, (event) => {
    discoverScenarioItem(event.player, event.item);
  });
});

PlayerEvents.loggedIn((event) => {
  const player = event.player;
  // Discover milestones already held when the script is first installed.
  const inventory = player.inventory;
  for (let slot = 0; slot < inventory.getSlots(); slot++) {
    discoverScenarioItem(player, inventory.getStackInSlot(slot));
  }
  discoverScenarioItem(player, player.getOffhandItem());
});

PlayerEvents.cloned((event) => {
  SCENARIO_ITEM_IDS.forEach((id) => {
    const key = SCENARIO_ITEM_KEY_PREFIX + id;
    if (event.oldPlayer.persistentData.getBoolean(key)) {
      event.player.persistentData.putBoolean(key, true);
    }
  });
});
