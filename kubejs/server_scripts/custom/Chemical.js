ServerEvents.recipes(function (e) {
    // 海带粉及合成盐
    e.recipes.create.milling("dimensionalrelics:kelp_dust", "minecraft:dried_kelp");
    e.recipes.create.crushing("dimensionalrelics:kelp_dust", "minecraft:dried_kelp");
    e.recipes.create.mixing([
        Fluid.of("mekanism:brine", 1000)
    ], [
        "dimensionalrelics:kelp_dust",
        Fluid.of("water", 1000)
    ]);
    // 煤粉、木炭粉清洗
    washing_recipe(e, "mekanism:dust_coal", "mekanism:sulfuric_acid", "dimensionalrelics:carbon_dust");
    washing_recipe(e, "mekanism:dust_charcoal", "mekanism:sulfuric_acid", "dimensionalrelics:carbon_dust");
    // 炭粉碎
    e.recipes.create.crushing([
        "mekanism:dust_coal",
        Item.of("mekanism:dust_coal").withChance(0.25)
    ], [
        "minecraft:coal"
    ]).id("create:crushing/coal");
    e.recipes.create.crushing([
        "mekanism:dust_charcoal",
        Item.of("mekanism:dust_charcoal").withChance(0.25)
    ], [
        "minecraft:charcoal"
    ]).id("create:crushing/charcoal");
});
