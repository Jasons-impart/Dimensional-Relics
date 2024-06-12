ServerEvents.recipes(event => {
    remove_recipes_output(event, [
        "mna:runeforge",
        "mna:manaweaving_altar"
    ]);
    event.shaped("mna:runeforge", [
        "A A",
        "BCB",
        "ABA",
    ], {
        A: "mna:transmuted_silver",
        B: "mna:decoration/arcane_stone",
        C: "minecraft:blast_furnace"
    }); 
    event.shaped("mna:manaweaving_altar",[
        "A A",
        "ABA",
        "BBB",
    ], {
        A: "mna:decoration/arcane_sandstone",
        B: "mna:decoration/arcane_stone"
    });
    // manatransmutation("minecraft:amethyst_block","elementalcraft:inertcrystal_block")
    // manatransmutation("thermal:silver_block","mna:decoration/transmuted_silver_block")
});
