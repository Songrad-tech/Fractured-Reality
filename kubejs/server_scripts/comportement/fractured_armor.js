const FRACTURED_FLIGHT_KEY = "fractured_reality.flight";
const FRACTURED_ARMOR = [
  "kubejs:fractured_boots",
  "kubejs:fractured_leggings",
  "kubejs:fractured_chestplate",
  "kubejs:fractured_helmet",
];

const FRACTURED_FIRE_DAMAGE_TYPES = [
  "minecraft:in_fire",
  "minecraft:on_fire",
  "minecraft:lava",
  "minecraft:hot_floor",
];

const hasFracturedArmorPiece = (player, slot, item) =>
  player.getInventory().getArmor(slot).id === item;

const hasFracturedBoots = (player) =>
  hasFracturedArmorPiece(player, 0, "kubejs:fractured_boots");

const hasFracturedHelmet = (player) =>
  hasFracturedArmorPiece(player, 3, "kubejs:fractured_helmet");

const hasFullFracturedArmor = (player) => {
  const inventory = player.getInventory();

  for (let slot = 0; slot < FRACTURED_ARMOR.length; slot++) {
    if (inventory.getArmor(slot).id !== FRACTURED_ARMOR[slot]) {
      return false;
    }
  }

  return true;
};

const setFracturedFlight = (player, enabled) => {
  if (player.isCreative() || player.isSpectator()) {
    player.persistentData.remove(FRACTURED_FLIGHT_KEY);
    return;
  }

  const abilities = player.getAbilities();
  const wasEnabled = player.persistentData.getBoolean(FRACTURED_FLIGHT_KEY);

  if (enabled && !wasEnabled) {
    abilities.mayfly = true;
    player.persistentData.putBoolean(FRACTURED_FLIGHT_KEY, true);
    player.onUpdateAbilities();
    return;
  }

  if (!enabled && wasEnabled) {
    abilities.mayfly = false;
    abilities.flying = false;
    player.persistentData.remove(FRACTURED_FLIGHT_KEY);
    player.onUpdateAbilities();
  }
};

const applyFracturedEffects = (player, fullSet) => {
  const name = player.username;

  if (hasFracturedHelmet(player)) {
    player.server.runCommandSilent(
      `effect give ${name} minecraft:night_vision 16 0 true`,
    );
  }

  if (fullSet) {
    player.server.runCommandSilent(
      `effect give ${name} minecraft:fire_resistance 16 0 true`,
    );
    player.server.runCommandSilent(`effect clear ${name} minecraft:poison`);
    player.server.runCommandSilent(`effect clear ${name} minecraft:wither`);
  }
};

PlayerEvents.tick((event) => {
  const player = event.player;

  if (hasFracturedBoots(player)) {
    player.resetFallDistance();
  }

  if (player.tickCount % 20 !== 0) {
    return;
  }

  const fullSet = hasFullFracturedArmor(player);
  setFracturedFlight(player, fullSet);
  applyFracturedEffects(player, fullSet);
});

EntityEvents.beforeHurt((event) => {
  const entity = event.entity;

  if (!entity.isPlayer()) {
    return;
  }

  const damageType = String(event.source.typeId || event.source);

  if (damageType === "minecraft:fall" && hasFracturedBoots(entity)) {
    event.setDamage(0);
    return;
  }

  if (
    FRACTURED_FIRE_DAMAGE_TYPES.includes(damageType) &&
    hasFullFracturedArmor(entity)
  ) {
    event.setDamage(0);
  }
});
