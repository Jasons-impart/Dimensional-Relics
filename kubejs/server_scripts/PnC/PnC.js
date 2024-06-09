ServerEvents.recipes(e => {
    e.remove({output:Item.of('pneumaticcraft:pressure_tube')})
    e.remove({output:Item.of('pneumaticcraft:pressure_chamber_wall')})
    e.remove({output:Item.of('pneumaticcraft:pressure_chamber_interface')}) 

//压力管道
    e.recipes.minecraft.crafting_shaped(
        '4x pneumaticcraft:pressure_tube',[
            "   ",
            "ABA",
            "   ",
        ],{
            A:'immersiveengineering:plate_steel',
            B:'#forge:glass/silica'
    })
//压力室墙壁
    e.recipes.minecraft.crafting_shaped(
        '5x pneumaticcraft:pressure_chamber_wall',[
            "ABA",
            "BAB",
            "ABA",
        ],{
            A:'pneumaticcraft:reinforced_stone',
            B:'immersiveengineering:plate_steel'
        }
    )
//压力室接口    
    e.recipes.minecraft.crafting_shaped(
        'pneumaticcraft:pressure_chamber_interface',[
            "AAA",
            "B B",
            "AAA",
        ],{
            A:'pneumaticcraft:reinforced_stone',
            B:'immersiveengineering:plate_steel'
        }
    )
})