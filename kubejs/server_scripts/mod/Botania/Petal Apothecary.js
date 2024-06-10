ServerEvents.recipes(e => {
    //删除花药台配方
    remove_recipes_output(e, [
        'botania:apothecary_default',
        'botania:apothecary_forest',
        'botania:apothecary_plains',
        'botania:apothecary_mountain',
        'botania:apothecary_fungal',
        'botania:apothecary_swamp',
        'botania:apothecary_desert',
        'botania:apothecary_taiga',
        'botania:apothecary_mesa',
        'botania:apothecary_mossy',
        'botania:apothecary_deepslate',
        'botania:apothecary_livingrock',
        'botania:pure_daisy'
    ]);
    e.shaped(Item.of('botania:apothecary_default',1), [
        'BAB',
        ' B ',
        'BBB'
    ],
    {
        A: 'elementalcraft:contained_crystal',
        B: 'minecraft:chiseled_stone_bricks'

    })
    e.recipes.botania.petal_apothecary("botania:pure_daisy", 
        [
            'create:tree_fertilizer',
            'botania:white_petal',
            'botania:white_petal',
            'elementalcraft:contained_crystal',
            'divinerpg:terran_shards'
        ])
})
