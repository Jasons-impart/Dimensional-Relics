ServerEvents.recipes(e => {
    // 重型机械外壳
    e.recipes.create.item_application(
        "tfmg:heavy_machinery_casing",
        [
            "tfmg:steel_casing",
            "tfmg:heavy_plate"
        ]
    )
    .id("tfmg:item_application/heavy_machinery_casing")
    // 移除聚乙烯块
    e.remove({ input: "tfmg:plastic_block" })
    e.remove({ output: "tfmg:plastic_block" })
    // 流体兼容create储罐
    e.recipes.create.emptying([Fluid.of("tfmg:crude_oil_fluid"), "minecraft:bucket"], "tfmg:crude_oil_fluid_bucket")
    e.recipes.create.emptying([Fluid.of("tfmg:gasoline"), "minecraft:bucket"], "tfmg:gasoline_bucket")
    e.recipes.create.emptying([Fluid.of("tfmg:creosote"), "minecraft:bucket"], "tfmg:creosote_bucket")
    e.recipes.create.emptying([Fluid.of("tfmg:heavy_oil"), "minecraft:bucket"], "tfmg:heavy_oil_bucket")
    e.recipes.create.emptying([Fluid.of("tfmg:naphtha"), "minecraft:bucket"], "tfmg:naphtha_bucket")
    e.recipes.create.emptying([Fluid.of("tfmg:kerosene"), "minecraft:bucket"], "tfmg:kerosene_bucket")
    e.recipes.create.emptying([Fluid.of("tfmg:diesel"), "minecraft:bucket"], "tfmg:diesel_bucket")
    e.recipes.create.emptying([Fluid.of("ulterlands:primosoup"), "minecraft:bucket"], "ulterlands:primosoup_bucket")
    // 硫粉兼容
    e.recipes.create.crushing([
        'thermal:sulfur_dust',
        Item.of('thermal:sulfur_dust').withChance(0.1)
    ], [
        "tfmg:sulfur"
    ]).id("tfmg:crushing/sulfur")
    e.shaped("tfmg:zinc_grenade", [
        " A ",
        "BCB",
        " A "
    ], {
        A: "create:zinc_ingot",
        B: 'thermal:sulfur_dust',
        C: "tfmg:thermite_grenade"
    }).id("tfmg:crafting/zinc_grenade")
    e.recipes.create.mixing("6x minecraft:gunpowder", [
        "2x tfmg:nitrate_dust",
        "3x minecraft:charcoal",
        'thermal:sulfur_dust'
    ]).id("tfmg:mixing/gun_powder")
    // 钢块合成
    e.shapeless("tfmg:steel_block", "9x tfmg:steel_ingot")
})
