ServerEvents.recipes(event => {
    remove_recipes_output(event, [
        "botania:runic_altar",
        'botania:rune_water',
        'botania:rune_fire',
        'botania:rune_earth',
        'botania:rune_air',
        'botania:rune_mana',
        'elementalcraft:purecrystal'
    ]);
    event.shaped("botania:runic_altar", [
        "   ",
        "AAA",
        "ABA"
    ], {
        A: "mna:decoration/arcane_sandstone",
        B: "mna:mana_crystal"
    });
//未完成的水之符文
    runic_altar(event,'2x dimensionalrelics:incomplete_rune_water',
        ['elementalcraft:watercrystal',
            'minecraft:fishing_rod',
            'minecraft:bone_meal',
            'minecraft:sugar_cane',
            'botania:mana_powder',
            'botania:manasteel_ingot'],5200)
//未完成的风之符文
    runic_altar(event,'2x dimensionalrelics:incomplete_rune_air',
        ['elementalcraft:aircrystal',
            'mna:animated_quill',
            'minecraft:string',
            'minecraft:white_wool',
            'botania:mana_powder',
            'botania:manasteel_ingot'],5200)
//未完成的火之符文
     runic_altar(event,'2x dimensionalrelics:incomplete_rune_fire',
        ['elementalcraft:firecrystal',
            'minecraft:nether_wart',
            'minecraft:gunpowder',
            'minecraft:nether_brick',
            'botania:mana_powder',
            'botania:manasteel_ingot'],5200)
//未完成的地之符文
     runic_altar(event,'2x dimensionalrelics:incomplete_rune_earth',
        ['elementalcraft:earthcrystal',
            '#forge:mushrooms',
            'minecraft:coal_block',
            'minecraft:stone',
            'botania:mana_powder',
            'botania:manasteel_ingot'],5200)
//未完成的魔力符文
     runic_altar(event,'2x dimensionalrelics:incomplete_rune_mana',
        ['elementalcraft:contained_crystal',
            'botania:manasteel_ingot',
            'botania:mana_powder',
            'botania:manasteel_ingot',
            'mna:superheated_purified_vinteum_ingot',
            'botania:manasteel_ingot'],8000)
//至纯水晶
     runic_altar(event,'elementalcraft:purecrystal',
        ['elementalcraft:aircrystal',
            'elementalcraft:firecrystal',
            'elementalcraft:watercrystal',
            'elementalcraft:earthcrystal',
            'minecraft:diamond'],15000)
});
