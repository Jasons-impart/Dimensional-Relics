ServerEvents.recipes(event => {
    remove_recipes_id(event, [
        "botania:pure_daisy/livingwood",
        "botania:pure_daisy/livingrock"
    ]);
    event.recipes.botania.pure_daisy(
        "botania:livingwood_log", "tfmg:hardened_planks"
    );
    event.recipes.botania.pure_daisy(
        "botania:livingrock", "pneumaticcraft:reinforced_stone"
    );
});