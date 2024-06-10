ServerEvents.recipes(function (event) {
    remove_recipes_output(event, [
        "botania:mana_string",
        "botania:mana_powder",
        "botania:mana_pearl",
        "botania:mana_diamond",
        "botania:manasteel_ingot",
        "botania:quartz_mana"
    ]);
    event.recipes.botania.mana_infusion("botania:manasteel_ingot", "#forge:ingots/steel", 500);
    event.recipes.botania.mana_infusion("botania:mana_string", "tfmg:plastic_sheet", 500);
    event.recipes.botania.mana_infusion("botania:quartz_mana", "ae2:certus_quartz_crystal", 500);
    event.recipes.botania.mana_infusion("botania:mana_powder", "enderio:grains_of_infinity", 200);
    event.recipes.botania.mana_infusion("botania:mana_diamond", "elementalcraft:contained_crystal", 500);
    event.recipes.botania.mana_infusion("botania:mana_pearl", "rftoolsbase:infused_enderpearl", 500);
});
