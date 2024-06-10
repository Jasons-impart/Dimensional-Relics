ServerEvents.recipes(function (event) {
    remove_recipes_mod(event, [
        "createaddition",
        "rftoolsbase",
    ]);
    remove_recipes_type(event, [
        "industrialforegoing:fluid_extractor"
    ]);
    remove_recipes_output(event, [
        "industrialforegoing:latex",
        "industrialforegoing:fluid_extractor",
        "betterend:guidebook",
    ]);
    remove_recipes_input(event, [
        "industrialforegoing:latex"
    ]);
    remove_recipes_id(event, [
        "enderio:cake",
        "farmersdelight:cake_from_milk_bottle",
        "minecraft:cake",
        "create:crafting/curiosities/cake"
    ]);
});
