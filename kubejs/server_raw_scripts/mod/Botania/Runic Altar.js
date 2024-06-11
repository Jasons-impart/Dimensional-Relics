ServerEvents.recipes(e => {
    remove_recipes_output(e, [
        "botania:runic_altar"
    ]);
    e.shaped("botania:runic_altar",[
        "   ",
        "AAA",
        "ABA"
    ],{
        A:"mna:decoration/arcane_sandstone",
        B:"mna:mana_crystal"
    })
})
