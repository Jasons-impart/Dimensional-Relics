ServerEvents.recipes(event => {
    remove_recipes_output(event, [
        "pneumaticcraft:reinforced_stone",
    ]);
    // 强化石
    event.recipes.create.compacting("pneumaticcraft:reinforced_stone",
        ["immersiveengineering:ingot_steel", "minecraft:stone"])
        .heated();

});
