ServerEvents.recipes(event => {
    remove_recipes_output(event, [
        "pneumaticcraft:reinforced_stone",
        
    ]);
    event.remove({ id:"create:crafting/materials/andesite_alloy"})
    event.remove({ id:"create:crafting/materials/andesite_alloy_from_zinc"})
    event.remove({ id:"create:mixing/andesite_alloy_from_zinc"})
    event.remove({ id:"create:mixing/andesite_alloy"})

// 强化石
    event.recipes.create.compacting('pneumaticcraft:reinforced_stone',
        ['tfmg:steel_ingot','minecraft:stone']).heated()
//安山合金混合液1
    event.recipes.create.mixing(['dimensionalrelics:andesite_alloy'],
        [Fluid.lava(400),'5x minecraft:andesite','2x minecraft:iron_ingot','minecraft:kelp'])
//安山合金混合液2    
    event.recipes.create.mixing(['dimensionalrelics:andesite_alloy'],
        ['9x minecraft:andesite','2x minecraft:iron_ingot','2x minecraft:kelp']).heated()
//安山合金混合液辊压
        event.recipes.create.compacting('create:andesite_alloy_block',
        [Fluid.of('dimensionalrelics:andesite_alloy')])
//门瑞欧树脂
        event.recipes.create.compacting('integrateddynamics:menril_resin',
       'integrateddynamics:menril_log')    


});
