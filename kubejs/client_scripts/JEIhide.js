JEIEvents.hideItems(event => {
    event.hide([
        "rftoolsbase:manual",
        "betterend:guidebook",
        "industrialforegoing:latex_bucket",
        "industrialforegoing:fluid_extractor",
        "tfmg:plastic_block",
        "elementalcraft:scroll",
        "elementalcraft:rune",
        "elementalcraft:jewel",
        "elementalcraft:minor_rune_slate",
        "elementalcraft:major_rune_slate",
        "elementalcraft:rune_slate",
        "#elementalcraft:shrine_upgrades",
        "#elementalcraft:shrines",
    ]);
});

JEIEvents.hideFluids(event => {
    event.hide([
        "industrialforegoing:latex",
    ]);
});
