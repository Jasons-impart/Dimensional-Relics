StartupEvents.registry("item", e => {
    //注册双钢锭
    e.create("dimensionalrelics:double_steel")
        .maxStackSize(32)
        .translationKey("item.dimensionalrelics.double_steel")
        .tag("forge:ingots")
        .rarity("rare")
    // 木柄螺丝刀
    e.create("tfmg:wooden_screwdriver")
        .maxStackSize(1)
        .maxDamage(32)
        .translationKey("item.tfmg.wooden_screwdriver")
        .tag("tfmg:screwdriver")
    // 粗铸铁
    e.create("dimensionalrelics:raw_cast_iron_ingot")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.raw_cast_iron_ingot")
        .tag("forge:ingots/raw_steel")
        .rarity("common")
    // 锤炼中的粗铸铁锭
    e.create("dimensionalrelics:hammering_raw_cast_iron_ingot")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.hammering_raw_cast_iron_ingot")
        .tag("forge:ingots/hammering_raw_steel")
        .rarity("common")
    // 太空合金
    e.create("dimensionalrelics:space_alloy_ingot")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.space_alloy_ingot")
        .tag("forge:ingots")
        .tag("forge:ingots/space_alloy")
        .rarity("epic")
    e.create("dimensionalrelics:space_alloy_nugget")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.space_alloy_nugget")
        .tag("forge:nuggets")
        .tag("forge:nuggets/space_alloy")
        .rarity("rare")
    e.create("dimensionalrelics:space_alloy_sheet")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.space_alloy_sheet")
        .tag("forge:plates")
        .tag("forge:plates/space_alloy")
        .rarity("rare")
    e.create("dimensionalrelics:space_alloy_handle")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.space_alloy_handle")
        .tag("forge:rods")
        .tag("forge:rods/space_alloy")
        .rarity("rare")
    // 太空合金构件
    e.create("dimensionalrelics:incompleted_space_alloy_precision_mechanism")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.incompleted_space_alloy_precision_mechanism")
        .rarity("rare")
    e.create("dimensionalrelics:space_alloy_precision_mechanism")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.space_alloy_precision_mechanism")
        .rarity("epic")
    // 辉影合金
    e.create("dimensionalrelics:glow_shadow_alloy")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.glow_shadow_alloy")
        .tag("forge:ingots")
        .tag("forge:ingots/glow_shadow")
        .rarity("epic")
    // 注册铝板
    e.create("tfmg:aluminum_sheet")
        .maxStackSize(64)
        .translationKey("item.tfmg.aluminum_sheet")
        .tag("forge:plates")
        .tag("forge:plates/aluminum")
        .rarity("common")
    // 注册碳板
    e.create("tfmg:coal_sheet")
        .maxStackSize(64)
        .translationKey("item.tfmg.coal_sheet")
        .tag("forge:plates")
        .tag("forge:plates/carbon")
        .rarity("common")
    // 注册碳粉
    e.create("dimensionalrelics:carbon_dust")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.carbon_dust")
        .tag("forge:dusts")
        .tag("forge:dusts/carbon")
        .rarity("rare")
    // 注册碳棒
    e.create("dimensionalrelics:carbon_rod")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.carbon_rod")
        .tag("forge:rods")
        .tag("forge:rods/carbon")
        .rarity("rare")
    // 注册海带粉
    e.create("dimensionalrelics:kelp_dust")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.kelp_dust")
        .rarity("common")
    // 注册硅晶片
    e.create("dimensionalrelics:silicon_plate")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.silicon_plate")
        .rarity("common")
    // 注册硅晶圆
    e.create("dimensionalrelics:wafer")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.wafer")
        .rarity("common")
    // 注册掺杂晶元
    e.create("dimensionalrelics:doping_wafer")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.doping_wafer")
        .rarity("rare")
    // 注册化工线相关物品
    e.create("dimensionalrelics:polystyrene")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.polystyrene")
        .tag("forge:ingots/plastic")
        .rarity("common")
    e.create("dimensionalrelics:polypropylene")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.polypropylene")
        .tag("forge:ingots/plastic")
        .rarity("common")
    e.create("dimensionalrelics:abs")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.abs")
        .tag("forge:ingots/plastic")
        .rarity("common")
    e.create("dimensionalrelics:abs_fibers")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.abs_fibers")
        .tag("forge:string")
        .rarity("common")
    e.create("dimensionalrelics:abs_fibers_sheet")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.abs_fibers_sheet")
        .tag("forge:plates")
        .rarity("common")
    //桨叶
    e.create("dimensionalrelics:watermill_blade")
        .maxStackSize(64)
        .translationKey("item.dimensionalrelics.watermill_blade")
        .rarity("common")
})
