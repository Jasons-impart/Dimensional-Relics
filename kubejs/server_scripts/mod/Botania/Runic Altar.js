ServerEvents.recipes(function (event) {
    remove_recipes_output(event, [
        "botania:runic_altar"
    ]);
    event.shaped("botania:runic_altar", [
        "   ",
        "AAA",
        "ABA"
    ], {
        A: "mna:decoration/arcane_sandstone",
        B: "mna:mana_crystal"
    });
});
