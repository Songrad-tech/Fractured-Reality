const WALLET_DISPLAY_KEY = "FracturedCoinBalanceDisplay";
const WALLET_TOOLTIP_ID = "fractured_reality:wallet_controls";

ItemEvents.modifyTooltips((event) => {
  event.modify("kubejs:fractured_wallet", (tooltip) => {
    tooltip.dynamic(WALLET_TOOLTIP_ID);
  });
});

ItemEvents.dynamicTooltips(WALLET_TOOLTIP_ID, (event) => {
  const coins = Math.max(
    0,
    event.item.getCustomData().getInt(WALLET_DISPLAY_KEY),
  );

  event.lines.add(Text.of(`${coins} Fractured Coins`).color("#e14dff"));
  event.lines.add(
    Text.of("Other hand + right-click: store held stack").color("gray"),
  );
  event.lines.add(Text.of("Shift + right-click: withdraw 1").color("gray"));
  event.lines.add(
    Text.of("Shift + left-click in air / with coins: withdraw 64").color(
      "gray",
    ),
  );
});
