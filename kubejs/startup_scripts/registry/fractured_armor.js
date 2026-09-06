const ArmorItemType = Java.loadClass("net.minecraft.world.item.ArmorItem$Type");
const HashMap = Java.loadClass("java.util.HashMap");
const Rarity = Java.loadClass("net.minecraft.world.item.Rarity");
const Unbreakable = Java.loadClass(
  "net.minecraft.world.item.component.Unbreakable",
);

const DataComponents = Java.loadClass(
  "net.minecraft.core.component.DataComponents",
);

ItemEvents.toolTierRegistry((event) => {
  event.addBasedOnExisting("fractured", "netherite", (tier) => {
    tier.setUses(2147483647);
    tier.setSpeed(90);
    tier.setAttackDamageBonus(60);
    tier.setEnchantmentValue(30);
  });
});

StartupEvents.registry("armor_material", (event) => {
  const defense = new HashMap();
  defense.put(ArmorItemType.BOOTS, 18);
  defense.put(ArmorItemType.LEGGINGS, 22);
  defense.put(ArmorItemType.CHESTPLATE, 26);
  defense.put(ArmorItemType.HELMET, 14);

  event
    .create("fractured")
    .defense(defense)
    .enchantmentValue(30)
    .toughness(12)
    .knockbackResistance(1);
});

const FRACTURED_UNBREAKABLE = new Unbreakable(false);
const FRACTURED_RARITY_TAG = `${FRACTURED_MOD_ID}:rarity/fractured`;
const FRACTURED_GEAR_TAG = `${FRACTURED_MOD_ID}:gear/fractured`;

StartupEvents.registry("item", (event) => {
  const fracturedGear = (builder) =>
    builder
      .component(DataComponents.UNBREAKABLE, FRACTURED_UNBREAKABLE)
      .rarity(Rarity.EPIC)
      .glow(true)
      .fireResistant()
      .tag(FRACTURED_RARITY_TAG)
      .tag(FRACTURED_GEAR_TAG)
      .maxStackSize(1);

  const fracturedTool = (id, type) =>
    fracturedGear(event.create(id, type))
      .parentModel(`${FRACTURED_MOD_ID}:item/${id}`)
      .tier("fractured");

  const fracturedArmor = (id, type) =>
    fracturedGear(event.create(id, type))
      .geoModel((geo) => {
        geo.setSimpleModel(`${FRACTURED_MOD_ID}:geo/fractured_armor.geo.json`);
        geo.setSimpleTexture(
          `${FRACTURED_MOD_ID}:textures/armor/fractured_armor.png`,
        );
      })
      .material("kubejs:fractured");

  fracturedTool("fractured_shovel", "shovel");
  fracturedTool("fractured_axe", "axe");
  fracturedTool("fractured_pickaxe", "pickaxe");
  fracturedTool("fractured_hoe", "hoe");
  fracturedTool("fractured_sword", "sword");

  fracturedArmor("fractured_helmet", "geckojs:anim_helmet");
  fracturedArmor("fractured_chestplate", "geckojs:anim_chestplate");
  fracturedArmor("fractured_leggings", "geckojs:anim_leggings");
  fracturedArmor("fractured_boots", "geckojs:anim_boots");
});
