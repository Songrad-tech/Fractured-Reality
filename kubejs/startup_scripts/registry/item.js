const DataComponents = Java.loadClass(
  "net.minecraft.core.component.DataComponents",
);
const ArmorItemType = Java.loadClass("net.minecraft.world.item.ArmorItem$Type");
const HashMap = Java.loadClass("java.util.HashMap");
const Rarity = Java.loadClass("net.minecraft.world.item.Rarity");
const Unbreakable = Java.loadClass(
  "net.minecraft.world.item.component.Unbreakable",
);

const FRACTURED_UNBREAKABLE = new Unbreakable(false);
const FRACTURED_RARITY_TAG = "fractured_reality:rarity/fractured";
const FRACTURED_GEAR_TAG = "fractured_reality:gear/fractured";

const fracturedGlitch = () => Text.of("x").color("#52fff6").obfuscated(true);
const fracturedName = (name) =>
  Text.of("")
    .append(fracturedGlitch())
    .append(Text.of(" "))
    .append(Text.of(name).color("#ff4dff"))
    .append(Text.of(" "))
    .append(fracturedGlitch())
    .italic(false);

const applyFracturedName = (builder, name) =>
  builder
    .formattedDisplayName(fracturedName(name))
    .component(DataComponents.ITEM_NAME, fracturedName(name));

ItemEvents.toolTierRegistry((event) => {
  event.addBasedOnExisting("fractured", "netherite", (tier) => {
    tier.setUses(2147483647);
    tier.setSpeed(90);
    tier.setAttackDamageBonus(40);
    tier.setEnchantmentValue(30);
  });
});

StartupEvents.registry("armor_material", (event) => {
  const defense = new HashMap();
  defense.put(ArmorItemType.BOOTS, 16);
  defense.put(ArmorItemType.LEGGINGS, 20);
  defense.put(ArmorItemType.CHESTPLATE, 24);
  defense.put(ArmorItemType.HELMET, 12);

  event
    .create("fractured")
    .defense(defense)
    .enchantmentValue(30)
    .toughness(12)
    .knockbackResistance(1);
});

StartupEvents.registry("item", (event) => {
  const fracturedArmor = (id, type, name) =>
    applyFracturedName(event.create(id, type), name)
      .material("kubejs:fractured")
      .component(DataComponents.UNBREAKABLE, FRACTURED_UNBREAKABLE)
      .rarity(Rarity.EPIC)
      .glow(true)
      .fireResistant()
      .tag(FRACTURED_RARITY_TAG)
      .tag(FRACTURED_GEAR_TAG)
      .maxStackSize(1);

  event.create("create:drill_head");
  event.create("create:saw_blade");

  event
    .create("andesite_core")
    .parentModel("fractured_reality:block/andesite_core");

  event
    .create("copper_core")
    .parentModel("fractured_reality:block/copper_core");

  event
    .create("incomplete_copper_core")
    .parentModel("fractured_reality:block/incomplete_copper_core")
    .tag("c:hidden_from_recipe_viewers");

  event.create("brass_core").parentModel("fractured_reality:block/brass_core");

  event
    .create("incomplete_brass_core")
    .parentModel("fractured_reality:block/incomplete_brass_core")
    .tag("c:hidden_from_recipe_viewers");

  event
    .create("electrum_core")
    .parentModel("fractured_reality:block/electrum_core");

  event
    .create("incomplete_electrum_core")
    .parentModel("fractured_reality:block/incomplete_electrum_core")
    .tag("c:hidden_from_recipe_viewers");

  event.create("fluix_core").parentModel("fractured_reality:block/fluix_core");

  event
    .create("honey_pearl")
    .texture("fractured_reality:item/honey_pearl")
    .maxStackSize(16);

  event
    .create("fractured_shard")
    .texture("fractured_reality:item/fractured_shard")
    .tag("the_bumblezone:crystalline_flower/xp_2_when_consumed");

  event
    .create("fractured_pearl")
    .texture("fractured_reality:item/fractured_pearl")
    .maxStackSize(16);

  event
    .create("uncharged_digital_eye")
    .texture("fractured_reality:item/uncharged_digital_eye");

  event
    .create("partial_mechanical_eye")
    .texture("fractured_reality:item/partial_mechanical_eye");

  event
    .create("partial_under_eye")
    .texture("fractured_reality:item/partial_under_eye");

  event
    .create("electrical_eye")
    .texture("fractured_reality:item/electrical_eye");

  event
    .create("fractured_coin")
    .texture("fractured_reality:item/fractured_coin");

  event
    .create("quarter_star")
    .displayName("Quarter Star")
    .texture("fractured_reality:item/quarter_star");

  event
    .create("fractured_wallet")
    .parentModel("fractured_reality:item/fractured_wallet")
    .maxStackSize(1);

  event
    .create("fractured_dragon_heart")
    .texture("fractured_reality:item/fractured_dragon_heart")
    .maxStackSize(1);

  event
    .create("fractured_ingot")
    .texture("fractured_reality:item/fractured_ingot");

  event
    .create("incomplete_fractured_ingot")
    .texture("fractured_reality:item/incomplete_fractured_ingot")
    .tag("c:hidden_from_recipe_viewers");

  event
    .create("fractured_shovel", "shovel")
    .formattedDisplayName(fracturedName("Fractured Shovel"))
    .component(DataComponents.ITEM_NAME, fracturedName("Fractured Shovel"))
    .parentModel("fractured_reality:item/fractured_shovel")
    .tier("fractured")
    .component(DataComponents.UNBREAKABLE, FRACTURED_UNBREAKABLE)
    .rarity(Rarity.EPIC)
    .glow(true)
    .fireResistant()
    .tag(FRACTURED_RARITY_TAG)
    .tag(FRACTURED_GEAR_TAG)
    .maxStackSize(1);

  fracturedArmor("fractured_helmet", "helmet", "Fractured Helmet");
  fracturedArmor("fractured_chestplate", "chestplate", "Fractured Chestplate");
  fracturedArmor("fractured_leggings", "leggings", "Fractured Leggings");
  fracturedArmor("fractured_boots", "boots", "Fractured Boots");
});
