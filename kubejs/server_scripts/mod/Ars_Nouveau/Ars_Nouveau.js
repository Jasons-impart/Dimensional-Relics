ServerEvents.recipes(function (e) {
    e.remove({ output: 'ars_nouveau:imbuement_chamber' });
    //灌注室
    e.shaped(Item.of('ars_nouveau:imbuement_chamber'), [
        "ABA",
        "ACA",
        "ADA"
    ], {
        A: "ars_nouveau:archwood_planks",
        B: "elementalcraft:swift_alloy_ingot",
        C: "ars_nouveau:source_gem",
        D: "botania:terrasteel_ingot"
    });
});
