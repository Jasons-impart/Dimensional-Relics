ServerEvents.recipes(e => {
    e.recipes.botania.pure_daisy(
        'botania:livingwood_log', 'tfmg:hardened_planks'
    );
    e.recipes.botania.pure_daisy(
        'botania:livingrock', 'pneumaticcraft:reinforced_stone'
    );
    remove_recipes_id(e, [
        'botania:pure_daisy/livingwood',
        'botania:pure_daisy/livingrock'
    ])
});