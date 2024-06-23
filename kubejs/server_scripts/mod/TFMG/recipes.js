ServerEvents.recipes(function (event) {
    // 工业铁块合成
    event.recipes.create.compacting("create:industrial_iron_block", "4x #forge:ingots/iron");
    // 搅拌合成：粗铸铁
    event.recipes.create.mixing(["dimensionalrelics:raw_cast_iron_ingot"], ["minecraft:iron_ingot", "#minecraft:coals", Fluid.lava(10)]).id("create.kjs:raw_steel");
    event.recipes.create.mixing(["dimensionalrelics:raw_cast_iron_ingot"], ["minecraft:iron_ingot", "#minecraft:coals"]).id("create.kjs:raw_steel/2")
        .heated();
    // 熔融铁
    event.custom({
        "type": "tfmg:industrial_blasting",
        "ingredients": [
            {
                "count": 1,
                "item": "minecraft:iron_ingot"
            }
        ],
        "processingTime": 100,
        "results": [
            {
                "fluid": "dimensionalrelics:molten_iron",
                "amount": 224
            },
            {
                "fluid": "tfmg:molten_slag",
                "amount": 50
            }
        ]
    });
    // 熔融铁→铸铁
    event.custom({
        "type": "tfmg:casting",
        "ingredients": [
            {
                "fluid": "dimensionalrelics:molten_iron",
                "amount": 1
            }
        ],
        "processingTime": 300,
        "results": [
            {
                "count": 1,
                "item": "tfmg:cast_iron_ingot"
            },
            {
                "count": 1,
                "item": "tfmg:cast_iron_block"
            }
        ]
    });
    // 铝锭烧练
    event.recipes.minecraft.smelting("tfmg:aluminum_ingot", "tfmg:bauxite");
    // 螺丝生产
    event.recipes.minecraft.stonecutting("2x tfmg:screw", "mekanism:ingot_steel").id("tfmg:stonecutting/screw");
    // 铝脚手架合成
    event.recipes.minecraft.stonecutting("4x tfmg:aluminum_scaffolding", "tfmg:aluminum_ingot").id("tfmg:aluminum_scaffolding_from_ingots_steel_stonecutting");
    // 铝脚手架合成
    event.recipes.minecraft.stonecutting("4x tfmg:steel_scaffolding", "mekanism:ingot_steel").id("tfmg:steel_scaffolding_from_ingots_steel_stonecutting");
    // 木柄螺丝刀合成
    event.recipes.minecraft.crafting_shaped("tfmg:wooden_screwdriver", [
        " A",
        "B "
    ], {
        A: "tfmg:rebar",
        B: "tfmg:hardened_planks"
    });
    // 螺丝刀合成
    event.recipes.minecraft.crafting_shaped("tfmg:screwdriver", [
        " A",
        "BC"
    ], {
        A: "tfmg:rebar",
        B: "#forge:ingots/plastic",
        C: "#forge:dyes/red"
    }).id("tfmg:crafting/screwdriver");
    // 序列合成：钢铁构件
    var unfinished = "tfmg:unfinished_steel_mechanism";
    event.recipes.create.sequenced_assembly([
        Item.of("tfmg:steel_mechanism").withChance(0.8),
        Item.of("create:precision_mechanism").withChance(0.2)
    ], "create:precision_mechanism", [
        event.recipes.create.deploying(unfinished, [unfinished, "ad_astra:steel_plate"]),
        event.recipes.create.deploying(unfinished, [unfinished, "tfmg:aluminum_sheet"]),
        event.recipes.create.deploying(unfinished, [unfinished, "tfmg:screw"]),
        event.recipes.create.deploying(unfinished, [unfinished, "#tfmg:screwdriver"])
    ]).transitionalItem(unfinished)
        .loops(2)
        .id("tfmg:sequenced_assembly/steel_mechanism");
    // 序列合成：铸铁
    var inter = "dimensionalrelics:hammering_raw_cast_iron_ingot";
    event.recipes.create.sequenced_assembly("tfmg:cast_iron_ingot", "dimensionalrelics:raw_cast_iron_ingot", [
        event.recipes.create.filling(inter, [inter, Fluid.lava(10)]),
        event.recipes.create.pressing(inter, inter)
    ]).transitionalItem(inter)
        .loops(3);
    event.remove({ id: "tfmg:compacting/iron_to_cast_iron_ingot" });
    // 石灰砂合成
    event.recipes.create.crushing([
        "tfmg:limesand",
        Item.of("tfmg:limesand")
            .withChance(0.3)
    ], "minecraft:flint")
        .id("create:crushing/flint");
    event.recipes.create.milling("tfmg:limesand", "minecraft:flint")
        .id("create:milling/flint");
    // 碳板合成
    event.recipes.create.compacting("tfmg:coal_sheet", "dimensionalrelics:carbon_dust")
        .heated()
        .id("craeteindustry:pressing/coal_sheet");
    // 碳棍合成
    event.custom({
        "type": "createaddition:rolling",
        "input": {
            "tag": "forge:plates/carbon"
        },
        "result": {
            "item": "dimensionalrelics:carbon_rod",
            "count": 2
        }
    });
    // 铝板合成
    event.recipes.create.pressing("tfmg:aluminum_sheet", "tfmg:aluminum_ingot")
        .id("tfmg:pressing/aluminum_sheet");
    // 钢双锭合成
    event.recipes.create.deploying("dimensionalrelics:double_steel", [
        "tfmg:steel_ingot", "tfmg:steel_ingot"
    ]);
    // 厚钢板合成
    var iner = "dimensionalrelics:double_steel";
    event.recipes.create.sequenced_assembly("tfmg:heavy_plate", "dimensionalrelics:double_steel", [
        event.recipes.create.pressing(iner, [iner, iner])
    ])
        .transitionalItem(iner)
        .loops(3)
        .id("tfmg:sequenced_assembly/heavy_plate");
    // 耐火黏土球与耐火黏土合成
    event.shapeless("tfmg:fireclay", "4x tfmg:fireclay_ball");
    event.recipes.create.crushing("4x tfmg:fireclay_ball", "tfmg:fireclay");
    // quark石灰岩兼容石灰粉
    event.recipes.create.crushing("tfmg:limesand", "quark:limestone");
    event.recipes.create.milling("tfmg:limesand", "quark:limestone");
    // 铝土矿作为副矿产生
    event.recipes.create.crushing([
        "create:crushed_raw_iron",
        Item.of("create:crushed_raw_aluminum")
            .withChance(0.3),
        Item.of("create:experience_nugget")
            .withChance(0.75)
    ], [
        "minecraft:raw_iron"
    ]).id("create:crushing/raw_iron");
    event.recipes.create.crushing([
        "9x create:crushed_raw_iron",
        Item.of("create:crushed_raw_aluminum")
            .withChance(0.3)
            .withCount(9),
        Item.of("create:experience_nugget")
            .withChance(0.75)
            .withCount(9)
    ], [
        "minecraft:raw_iron_block"
    ]).id("create:crushing/raw_iron_block");
    // 抽油机部件合成
    event.recipes.create.item_application("tfmg:pumpjack_hammer_part", ["tfmg:heavy_machinery_casing", "tfmg:cast_iron_ingot"]).id("tfmg:stonecutting/pumpjack_hammer_part");
    // 抽油机链接组件合成
    var iner_2 = "tfmg:pumpjack_hammer_part";
    event.recipes.create.sequenced_assembly("tfmg:pumpjack_hammer_connector", "tfmg:pumpjack_hammer_part", [event.recipes.create.deploying(iner_2, [iner_2, "tfmg:aluminum_ingot"]),
        event.recipes.create.deploying(iner_2, [iner_2, "tfmg:screw"]),
        event.recipes.create.deploying(iner_2, [iner_2, "#tfmg:screwdriver"])])
        .transitionalItem(iner_2)
        .loops(2)
        .id("tfmg:crafting/pumpjack_hammer_connector");
    // 抽油机锤头合成
    event.recipes.create.item_application("tfmg:pumpjack_hammer_head", ["mekanism:block_steel", "tfmg:cast_iron_ingot"]).id("tfmg:crafting/pumpjack_hammer_head");
    // 大型抽油机合成
    pneumatic_recipes.pressure_chamber(event, [
        ["tfmg:large_pumpjack_hammer_part"]
    ], [
        ["tfmg:pumpjack_hammer_part", 2]
    ], 3.5);
    // tfmg:large_pumpjack_hammer_head
    pneumatic_recipes.pressure_chamber(event, [
        ["tfmg:large_pumpjack_hammer_head"]
    ], [
        ["tfmg:pumpjack_hammer_head", 2]
    ], 3.5).id("tfmg:stonecutting/large_pumpjack_hammer_head");
    // tfmg:large_pumpjack_hammer_connector
    pneumatic_recipes.pressure_chamber(event, [
        ["tfmg:large_pumpjack_hammer_connector"]
    ], [
        ["tfmg:pumpjack_hammer_connector", 2]
    ], 3.5).id("tfmg:stonecutting/large_pumpjack_hammer_connector");
    // 钢制流体储罐合成
    event.recipes.create.item_application("tfmg:steel_fluid_tank", ["create:fluid_tank", "#forge:plates/steel"]).id("tfmg:crafting/steel_tank");
    // 乙烯合成配方修改
    event.recipes.create.mixing([
        Fluid.of("tfmg:liquid_plastic", 500)
    ], [
        Fluid.of("tfmg:ethylene", 1000)
    ]).id("tfmg:mixing/liquid_plastic_from_ethylene")
        .heated();
    // 聚丙烯合成配方
    event.recipes.create.mixing([
        Fluid.of("dimensionalrelics:propylene", 500)
    ], [
        Fluid.of("tfmg:propylene", 1000)
    ]).heated();
    // 聚苯乙烯
    event.recipes.create.mixing(Fluid.of("dimensionalrelics:styrene", 1000), [
        Fluid.of("tfmg:ethylene", 1000),
        Fluid.of("dimensionalrelics:benzene", 200)
    ]).heated();
    event.recipes.create.compacting("dimensionalrelics:polystyrene", [
        Fluid.of("dimensionalrelics:polystyrene")
    ]);
    // 高分子化合物合成
    event.recipes.create.mixing(["2x dimensionalrelics:super_polymer"], [
        "tfmg:plastic_sheet",
        "dimensionalrelics:polypropylene",
        "dimensionalrelics:polystyrene",
        "dimensionalrelics:polyvinyl_chloride"
    ]).superheated();
    // 航空纤维
    event.recipes.create.mixing(["dimensionalrelics:aviation_fibers"], [
        "dimensionalrelics:super_polymer",
        "vintageimprovements:steel_wire",
        Fluid.of("tfmg:liquid_plastic", 200)
    ]);
    // 航空纤维板
    var iner_1 = "tfmg:coal_sheet";
    event.recipes.create.sequenced_assembly("dimensionalrelics:aviation_fibers_sheet", "tfmg:coal_sheet", [
        event.recipes.create.deploying(iner_1, [iner_1, "dimensionalrelics:aviation_fibers"]),
        event.recipes.create.filling(iner_1, [iner_1, Fluid.of("tfmg:liquid_plastic", 100)]),
    ]).transitionalItem(iner_1)
        .loops(3);
    // 焦煤合成修改
    event.custom({
        "type": "tfmg:coking",
        "ingredients": [
            {
                "count": 1,
                "item": "minecraft:coal"
            }
        ],
        "processingTime": 200,
        "results": [
            {
                "count": 2,
                "item": "tfmg:coal_coke"
            },
            {
                "fluid": "tfmg:creosote",
                "amount": 1
            }
        ]
    }).id("tfmg:coking/coal_coke");
    // 石油分馏
    event.custom({
        "type": "tfmg:advanced_distillation",
        "ingredients": [
            {
                "fluid": "tfmg:crude_oil_fluid",
                "nbt": {},
                "amount": 200
            }
        ],
        "results": [
            {
                "fluid": "tfmg:heavy_oil",
                "amount": 40
            },
            {
                "fluid": "tfmg:diesel",
                "amount": 30
            },
            {
                "fluid": "tfmg:kerosene",
                "amount": 30
            },
            {
                "fluid": "tfmg:naphtha",
                "amount": 70
            },
            {
                "fluid": "tfmg:lpg",
                "amount": 30
            }
        ]
    }).id("tfmg:fractional_distillation/crude_oil");
    // 重油分馏
    event.custom({
        "type": "tfmg:advanced_distillation",
        "ingredients": [
            {
                "fluid": "tfmg:heavy_oil",
                "nbt": {},
                "amount": 100
            }
        ],
        "results": [
            {
                "fluid": "tfmg:liquid_asphalt",
                "amount": 40
            },
            {
                "fluid": "tfmg:lubrication_oil",
                "amount": 60
            },
        ]
    }).id("tfmg:fractional_distillation/heavy_oil");
    // 煤油裂解
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [
            {
                "fluid": "tfmg:kerosene",
                "nbt": {},
                "amount": 300
            }
        ],
        "results": [
            {
                "fluid": "tfmg:lpg",
                "amount": 30
            },
            {
                "fluid": "tfmg:ethylene",
                "amount": 35
            },
            {
                "fluid": "tfmg:ethylene",
                "amount": 35
            },
            {
                "item": "tfmg:coal_coke"
            },
            {
                "item": "thermal:sulfur_dust"
            }
        ]
    }).id("tfmg:distillation/kerosene");
    // 杂酚油裂解
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [
            {
                "fluid": "tfmg:creosote",
                "nbt": {},
                "amount": 5
            }
        ],
        "results": [
            {
                "fluid": "dimensionalrelics:benzene",
                "amount": 3
            },
            {
                "fluid": "dimensionalrelics:benzene",
                "amount": 2
            },
            {
                "fluid": "tfmg:ethylene",
                "amount": 2
            },
            {
                "item": "minecraft:air"
            },
            {
                "item": "minecraft:air"
            }
        ]
    }).id("tfmg:distillation/creosote");
    // 石脑油分馏提纯
    event.custom({
        "type": "tfmg:advanced_distillation",
        "ingredients": [
            {
                "fluid": "tfmg:naphtha",
                "nbt": {},
                "amount": 100
            }
        ],
        "results": [
            {
                "fluid": "tfmg:kerosene",
                "amount": 20
            },
            {
                "fluid": "tfmg:gasoline",
                "amount": 80
            },
        ]
    }).id("tfmg:fractional_distillation/naphtha");
    // 石脑油裂解
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [
            {
                "fluid": "tfmg:naphtha",
                "nbt": {},
                "amount": 3
            }
        ],
        "results": [
            {
                "fluid": "tfmg:propylene",
                "amount": 1
            },
            {
                "fluid": "tfmg:ethylene",
                "amount": 1
            },
            {
                "fluid": "dimensionalrelics:benzene",
                "amount": 1
            },
            {
                "item": "minecraft:air"
            },
            {
                "item": "minecraft:air"
            }
        ]
    }).id("tfmg:distillation/naphtha");
    // 移除古早配方
    remove_recipes_id(event, [
        "tfmg:fractional_distillation/crude_oil_sus",
        "tfmg:fractional_distillation/heavy_oil",
        "tfmg:distillation/heavy_oil",
        "tfmg:mixing/liquid_plastic_from_propylene",
        "tfmg:mixing/cast_iron_ingot",
        "tfmg:compacting/plastic_molding",
        "create:industrial_iron_block_from_ingots_iron_stonecutting",
        "tfmg:stonecutting/large_pumpjack_hammer_part"
    ]);
});
ServerEvents.tags("fluid", function (event) {
});
