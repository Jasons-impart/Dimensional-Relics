StartupEvents.registry("block", e => {
    function registerBlock(
        Name,
        SoundType,
        Hardness,
        Resistance,
        Tool,
        Grade,
        RequiresTool
    ) {
        e.create("dimensionalrelics:" + Name)
            .translationKey("block.dimensionalrelics." + Name)
            .soundType(SoundType)
            .hardness(Hardness)
            .resistance(Resistance)
            .tagBlock(Tool)
            .tagBlock(Grade)
            .requiresTool(RequiresTool)
    }
    // 太空合金块
    registerBlock("space_alloy_block", "metal", 15, 1200, "mineable/pickaxe", "forge:needs_netherite_tool", true)
    // 注册锂矿
    e.create("dimensionalrelics:lithium_ore")
        .translationKey("block.dimensionalrelics.lithium_ore")
        .soundType("stone")
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool")
        .tag("balm:ores")
        .tag("forge:ores")
        .tag("forge:ores/lithium")
        .tag("forge:ores_in_ground/stone")
        .requiresTool(true)
        .textureAll("dimensionalrelics:block/lithium_ore")
    // 注册锰矿
    e.create("dimensionalrelics:manganese_ore")
        .translationKey("block.dimensionalrelics.manganese_ore")
        .soundType("stone")
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool")
        .tag("balm:ores")
        .tag("forge:ores")
        .tag("forge:ores/manganese")
        .tag("forge:ores_in_ground/stone")
        .tag("forge:ore_rates/singular")
        .requiresTool(true)
        .textureAll("dimensionalrelics:block/manganese_ore")
    // 注册钴矿
    e.create("dimensionalrelics:cobalt_ore")
        .translationKey("block.dimensionalrelics.cobalt_ore")
        .soundType("stone")
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool")
        .tag("balm:ores")
        .tag("forge:ores")
        .tag("forge:ores/cobalt")
        .tag("forge:ores_in_ground/stone")
        .requiresTool(true)
        .textureAll("dimensionalrelics:block/cobalt_ore")
})
