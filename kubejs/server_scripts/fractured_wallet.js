const FRACTURED_WALLET = "kubejs:fractured_wallet";
const FRACTURED_COIN = "kubejs:fractured_coin";
const LEGACY_WALLET_COIN_KEY = "FracturedCoins";
const PLAYER_COIN_KEY = "FracturedCoinBalance";
const WALLET_DISPLAY_KEY = "FracturedCoinBalanceDisplay";
const WALLET_WITHDRAW_AMOUNT = 64;
const WALLET_MAX_COINS = 2147483647;

function getPlayerCoins(player) {
  return Math.max(0, player.persistentData.getInt(PLAYER_COIN_KEY));
}

function syncWalletDisplay(wallet, amount) {
  if (wallet.id !== FRACTURED_WALLET) return;

  const data = wallet.getCustomData();
  const safeAmount = Math.max(0, Math.min(WALLET_MAX_COINS, amount));
  if (data.getInt(WALLET_DISPLAY_KEY) === safeAmount) return;

  data.putInt(WALLET_DISPLAY_KEY, safeAmount);
  wallet.setCustomData(data);
}

function syncAllWalletDisplays(player) {
  const balance = getPlayerCoins(player);
  const inventory = player.inventory;

  for (let slot = 0; slot < inventory.getSlots(); slot++) {
    syncWalletDisplay(inventory.getStackInSlot(slot), balance);
  }

  syncWalletDisplay(player.getMainHandItem(), balance);
  syncWalletDisplay(player.getOffhandItem(), balance);
  player.sendInventoryUpdate();
}

function setPlayerCoins(player, amount) {
  const safeAmount = Math.max(0, Math.min(WALLET_MAX_COINS, amount));
  player.persistentData.putInt(PLAYER_COIN_KEY, safeAmount);
  syncAllWalletDisplays(player);
}

function migrateLegacyWallet(player, wallet) {
  const data = wallet.getCustomData();
  const legacyCoins = Math.max(0, data.getInt(LEGACY_WALLET_COIN_KEY));
  if (legacyCoins <= 0) return;

  data.remove(LEGACY_WALLET_COIN_KEY);
  wallet.setCustomData(data);
  setPlayerCoins(player, getPlayerCoins(player) + legacyCoins);
  player.setStatusMessage(
    Text.of(`Migrated ${legacyCoins} coins to your shared balance`).color("#ff99ff"),
  );
}

function depositFracturedCoins(player, wallet, walletHand) {
  migrateLegacyWallet(player, wallet);
  const stored = getPlayerCoins(player);
  const room = WALLET_MAX_COINS - stored;
  const coinsInOtherHand =
    walletHand.name() === "MAIN_HAND"
      ? player.getOffhandItem()
      : player.getMainHandItem();

  if (coinsInOtherHand.id !== FRACTURED_COIN) {
    player.setStatusMessage(
      Text.of("Hold Fractured Coins in your other hand").color("gray"),
    );
    return;
  }

  const deposited = Math.min(coinsInOtherHand.count, room);

  if (deposited <= 0) {
    player.setStatusMessage(Text.of(`Wallet: ${stored} Fractured Coins`).color("#e14dff"));
    return;
  }

  coinsInOtherHand.shrink(deposited);
  setPlayerCoins(player, stored + deposited);
  player.setStatusMessage(
    Text.of(`Stored ${deposited} coins | Total: ${stored + deposited}`).color("#e14dff"),
  );
  player.runCommandSilent("playsound minecraft:entity.item.pickup player @s ~ ~ ~ 0.55 0.8");
}

function withdrawFracturedCoins(player, wallet, requestedAmount) {
  migrateLegacyWallet(player, wallet);
  const stored = getPlayerCoins(player);
  if (stored <= 0) {
    player.setStatusMessage(Text.of("The wallet is empty").color("gray"));
    return;
  }

  const withdrawn = Math.min(requestedAmount, stored);
  setPlayerCoins(player, stored - withdrawn);
  player.give(Item.of(FRACTURED_COIN, withdrawn));
  player.sendInventoryUpdate();
  player.setStatusMessage(
    Text.of(`Withdrew ${withdrawn} coins | Remaining: ${stored - withdrawn}`).color("#ff99ff"),
  );
  player.runCommandSilent("playsound minecraft:item.bundle.remove_one player @s ~ ~ ~ 0.65 1.15");
}

ItemEvents.rightClicked(FRACTURED_WALLET, (event) => {
  const player = event.player;
  if (player.level.isClientSide()) return;

  if (player.isShiftKeyDown()) {
    withdrawFracturedCoins(player, event.item, 1);
  } else {
    depositFracturedCoins(player, event.item, event.hand);
  }
});

ItemEvents.firstLeftClicked((event) => {
  const player = event.player;
  if (player.level.isClientSide() || !player.isShiftKeyDown()) return;

  const wallet =
    event.item.id === FRACTURED_WALLET
      ? event.item
      : player.getOffhandItem();

  if (wallet.id !== FRACTURED_WALLET) return;

  const clickedInAir = event.target.type.name() === "MISS";
  const holdsCoinsInMainHand = player.getMainHandItem().id === FRACTURED_COIN;
  if (!clickedInAir && !holdsCoinsInMainHand) return;

  withdrawFracturedCoins(player, wallet, WALLET_WITHDRAW_AMOUNT);
});

PlayerEvents.inventoryChanged(FRACTURED_WALLET, (event) => {
  syncWalletDisplay(event.item, getPlayerCoins(event.player));
});

PlayerEvents.loggedIn((event) => {
  syncAllWalletDisplays(event.player);
});

PlayerEvents.cloned((event) => {
  const balance = getPlayerCoins(event.oldPlayer);
  event.player.persistentData.putInt(PLAYER_COIN_KEY, balance);
  event.server.scheduleInTicks(1, () => syncAllWalletDisplays(event.player));
});
