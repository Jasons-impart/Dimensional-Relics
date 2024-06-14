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
    event.shaped("mna:manaweaving_altar", [
        "A A",
        "ABA",
        "BBB",
    ], {
        A: "mna:decoration/arcane_sandstone",
        B: "mna:decoration/arcane_stone"
    });
    // 测试
    mna.manaweaving_recipe(event,2,
        ["minecraft:dirt"],
        [
            "minecraft:grass_block",
            '#forge:ingots/iron'
        ],
        [
            "mna:triangle"
        ]
    )
    // 嬗变惰性水晶
    manatransmutation(event,
        "minecraft:amethyst_block", "elementalcraft:inertcrystal_block");
    manatransmutation(event,
        "thermal:silver_block", "mna:decoration/transmuted_silver_block");
    //魔源宝石合成
    event.custom({type:"mna:ritual",tier:2,
        pattern:[[12, 0, 9, 0,13],
                 [ 0, 0, 8, 0, 0],
                 [ 1, 2, 3, 4, 5],
                 [ 0, 0, 6, 0, 0],
                 [10, 0, 7, 0,11]],
        reagents:[
                "  A  ",
                "     ",
                "B C D",
                "     ",
                "  E  "],
        keys:{
            A:{
                "item": 'mna:mote_arcane',
			    "optional": false,
			    "consume": true
            },
            B:{
               "item": 'mna:mote_fire',
			    "optional": false,
			    "consume": true 
            },
            C:{
              "item": 'mna:mote_air',
			   "optional": false,
			    "consume": true 
            },
            D:{
              "item": 'mna:mote_ender',
			   "optional": false,
			   "consume": true  
            },
            E:{
               "item": 'mna:mote_earth',
			   "optional": false,
			   "consume": true
                },
            manaweave:[
                "mna:manaweave_patterns/knot",
                "mna:manaweave_patterns/knot3",
                "mna:manaweave_patterns/triangle"
            ],
            parameters:
	    {
		"innerColor": "0x555555",
		"outerColor": "0xFFFFFF",
		"displayIndexes": false,
		"connectBeam": false
	    }},
    createsItem:'ars_nouveau:source_gem'
    })
});
