const FRACTURED_FLIGHT_KEY = "fractured_reality.flight";
const FRACTURED_FIRE_DAMAGE_TYPES = [
  "minecraft:in_fire",
  "minecraft:on_fire",
  "minecraft:lava",
  "minecraft:hot_floor",
];

const FRACTURED_FIRE_DAMAGE_TYPE_LOOKUP = {};
FRACTURED_FIRE_DAMAGE_TYPES.forEach((type) => {
  FRACTURED_FIRE_DAMAGE_TYPE_LOOKUP[type] = true;
});

const getFracturedArmorState = (player) => {
  const inventory = player.getInventory();
  const boots = inventory.getArmor(0).id === "kubejs:fractured_boots";
  const leggings = inventory.getArmor(1).id === "kubejs:fractured_leggings";
  const chestplate = inventory.getArmor(2).id === "kubejs:fractured_chestplate";
  const helmet = inventory.getArmor(3).id === "kubejs:fractured_helmet";

  return {
    boots: boots,
    leggings: leggings,
    helmet: helmet,
    fullSet: boots && leggings && chestplate && helmet,
  };
};

const setFracturedFlight = (player, enabled) => {
  if (player.isCreative() || player.isSpectator()) {
    player.persistentData.remove(FRACTURED_FLIGHT_KEY);
    return;
  }

  const abilities = player.getAbilities();
  const wasEnabled = player.persistentData.getBoolean(FRACTURED_FLIGHT_KEY);

  if (enabled) {
    const needsAbilityUpdate = !wasEnabled || !abilities.mayfly;

    if (!abilities.mayfly) {
      abilities.mayfly = true;
    }

    player.persistentData.putBoolean(FRACTURED_FLIGHT_KEY, true);

    if (needsAbilityUpdate) {
      player.onUpdateAbilities();
    }

    return;
  }

  if (!enabled && wasEnabled) {
    abilities.mayfly = false;
    abilities.flying = false;
    player.persistentData.remove(FRACTURED_FLIGHT_KEY);
    player.onUpdateAbilities();
  }
};

PlayerEvents.loggedIn((event) => {
  const player = event.player;
  setFracturedFlight(player, getFracturedArmorState(player).fullSet);
});

const giveFracturedEffect = (player, effect, amplifier) => {
  player.server.runCommandSilent(
    `effect give ${player.username} ${effect} 16 ${amplifier} true`,
  );
};

const applyFracturedEffects = (player, armor) => {
  const name = player.username;

  if (armor.helmet) {
    giveFracturedEffect(player, "minecraft:night_vision", 0);
    giveFracturedEffect(player, "minecraft:water_breathing", 0);
  }

  if (armor.leggings) {
    giveFracturedEffect(player, "minecraft:speed", 1);
    giveFracturedEffect(player, "minecraft:haste", 1);
  }

  if (armor.fullSet) {
    giveFracturedEffect(player, "minecraft:fire_resistance", 0);
    giveFracturedEffect(player, "minecraft:absorption", 1);
    player.server.runCommandSilent(`effect clear ${name} minecraft:poison`);
    player.server.runCommandSilent(`effect clear ${name} minecraft:wither`);
  }
};

PlayerEvents.tick((event) => {
  const player = event.player;
  const armor = getFracturedArmorState(player);

  if (armor.boots) {
    player.resetFallDistance();
  }

  if (player.tickCount % 20 !== 0) {
    return;
  }

  setFracturedFlight(player, armor.fullSet);
  applyFracturedEffects(player, armor);
});

EntityEvents.beforeHurt((event) => {
  const entity = event.entity;

  if (!entity.isPlayer()) {
    return;
  }

  const damageType = String(event.source.typeId || event.source);
  const armor = getFracturedArmorState(entity);

  if (damageType === "minecraft:fall" && armor.boots) {
    event.setDamage(0);
    return;
  }

  if (FRACTURED_FIRE_DAMAGE_TYPE_LOOKUP[damageType] && armor.fullSet) {
    event.setDamage(0);
  }
});
