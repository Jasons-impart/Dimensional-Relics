ServerEvents.recipes(event => {
    event.shaped(Item.of('quark:ancient_chest'), [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A:"minecraft:mangrove_planks",
        B:"minecraft:iron_nugget"
    })

    event.recipes.minecraft.crafting_shaped('sophisticatedstorage:stack_upgrade_tier_2',[
        "ABA",
        "BCB",
        "DBD"
    ],{
        A:'minecraft:iron_ingot',
        B:'elementalcraft:inert_crystal',
        C:'sophisticatedstorage:stack_upgrade_tier_1',
        D:'minecraft:iron_block'
    })
})