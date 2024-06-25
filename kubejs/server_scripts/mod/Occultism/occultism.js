ServerEvents.recipes(function (event) {
    event.remove({ id: "occultism:spirit_fire/spirit_attuned_gem" });
    //魔源水晶召唤
    event.custom({
        type: "occultism:ritual",
        ritual_type: "occultism:craft",
        activation_item: {
            item: 'minecraft:amethyst_shard'
        },
        pentacle_id: "occultism:craft_marid",
        duration: 60,
        ritual_dummy: {
            item: "dimensionalrelics:source_gem"
        },
        ingredients: [
            { item: "botania:mana_diamond" },
            { item: "elementalcraft:swift_alloy_ingot" },
            { item: "botania:manasteel_ingot" },
            { item: "elementalcraft:purecrystal" },
            { item: "ars_nouveau:sourceberry_bush" }
        ],
        result: {
            item: "ars_nouveau:source_gem"
        }
    }).id("dimensionalrelics:ritual_source_gem");
    //魔灵同调宝石
    event.custom({
        type: "occultism:spirit_fire",
        ingredient: { item: 'botania:mana_diamond' },
        result: { item: 'occultism:spirit_attuned_gem' }
    });
});
