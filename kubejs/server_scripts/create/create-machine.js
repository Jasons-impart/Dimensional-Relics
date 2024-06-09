ServerEvents.recipes(e => {
    e.remove({output:Item.of('pneumaticcraft:reinforced_stone')})
//强化石
    e.recipes.create.compacting('pneumaticcraft:reinforced_stone', 
    ['immersiveengineering:ingot_steel','minecraft:stone'])
    .heated()





})