ServerEvents.recipes(function (event) {
    remove_recipes_output(event, [
        "pneumaticcraft:pressure_tube",
        "pneumaticcraft:pressure_chamber_wall",
        "pneumaticcraft:pressure_chamber_interface",
    ]);
    // 压力管道
    event.recipes.minecraft.crafting_shaped("4x pneumaticcraft:pressure_tube", [
        "   ",
        "ABA",
        "   ",
    ], {
        A: 'tfmg:heavy_plate',
        B: "#forge:glass/silica"
    });
    // 压力室墙壁
    event.recipes.minecraft.crafting_shaped("5x pneumaticcraft:pressure_chamber_wall", [
        "ABA",
        "BAB",
        "ABA",
    ], {
        A: "pneumaticcraft:reinforced_stone",
        B: 'tfmg:heavy_plate'
    });
    // 压力室接口    
    event.recipes.minecraft.crafting_shaped("pneumaticcraft:pressure_chamber_interface", [
        "AAA",
        "B B",
        "AAA",
    ], {
        A: "pneumaticcraft:reinforced_stone",
        B: 'tfmg:heavy_plate'
    });
});
