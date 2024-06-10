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
    event.custom({
        "type": "mna:transmutation",
        "targetBlock": "minecraft:amethyst_block",
        "replaceBlock": "elementalcraft:inertcrystal_block"  
    });
    /*
    manaweaving_recipe(event,
        1,
        "evilcraft:blood_infusion_core",
        1,
        [
            'evilcraft:dark_power_gem',
            'evilcraft:hardened_blood_shard',
            'evilcraft:hardened_blood_shard',
            'naturesaura:gold_powder',
            'naturesaura:gold_powder',
            'mna:vinteum_ingot'
        ],
        [
            "mna:circle",
            "mna:slash"
        ]
    );
    manaweaving_recipe(event,
        1,
        "bloodmagic:weakbloodorb",
        1,
        [
            'evilcraft:blood_orb_filled',
            'forbidden_arcanus:mundabitur_dust',
            'forbidden_arcanus:mundabitur_dust'
        ],
        [
            "mna:circle",
            "mna:circle"
        ]
    );
    */

});
