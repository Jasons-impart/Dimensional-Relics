ServerEvents.recipes(e => {
    // 搅拌合成：粗铸铁
    e.recipes.create.mixing(
        ["dimensionalrelics:raw_cast_iron_ingot"],
        ["minecraft:iron_ingot", "#minecraft:coals", Fluid.lava(10)]
    )
        .id("create.kjs:raw_steel")
    e.recipes.create.mixing(
        ["dimensionalrelics:raw_cast_iron_ingot"],
        ["minecraft:iron_ingot", "#minecraft:coals"]
    )
        .id("create.kjs:raw_steel/2")
        .heated()
    // 序列合成：铸铁
    const inter = "dimensionalrelics:hammering_raw_cast_iron_ingot"
    e.recipes.create.sequenced_assembly("tfmg:cast_iron_ingot", "dimensionalrelics:raw_cast_iron_ingot", [
        e.recipes.create.filling(inter, [inter, Fluid.lava(10)]),
        e.recipes.create.pressing(inter, inter)
    ])
        .transitionalItem(inter)
        .loops(3)
    e.remove({ id: "tfmg:compacting/iron_to_cast_iron_ingot" })
    // 石灰砂合成
    e.recipes.create.crushing(
        [
            "tfmg:limesand",
            Item.of("tfmg:limesand")
                .withChance(0.3)
        ],
        "minecraft:flint"
    )
        .id("create:crushing/flint")
    e.recipes.create.milling(
        "tfmg:limesand",
        "minecraft:flint"
    )
        .id("create:milling/flint")
    // 碳板合成
    e.recipes.create.compacting("tfmg:coal_sheet", "dimensionalrelics:carbon_dust")
        .heated()
        .id("craeteindustry:pressing/coal_sheet")
    // 碳棍合成
    e.custom({
            "type": "createaddition:rolling",
            "input": {
                "tag": "forge:plates/carbon"
            },
            "result": {
                "item": "dimensionalrelics:carbon_rod",
                "count": 2
            }
        })
    // 铝板合成
    e.recipes.create.pressing("tfmg:aluminum_sheet", "tfmg:aluminum_ingot")
        .id("tfmg:pressing/aluminum_sheet")
    // 钢双锭合成
    e.recipes.create.deploying("dimensionalrelics:double_steel", ["tfmg:steel_ingot", "tfmg:steel_ingot"])
    // 厚钢板合成
    const iner = "dimensionalrelics:double_steel"
    e.recipes.create.sequenced_assembly("tfmg:heavy_plate", "dimensionalrelics:double_steel", [
        e.recipes.create.pressing(iner, [iner, iner])
    ])
        .transitionalItem(iner)
        .loops(3)
        .id("tfmg:sequenced_assembly/heavy_plate")
    // 耐火黏土球与耐火黏土合成
    e.shapeless("tfmg:fireclay", "4x tfmg:fireclay_ball")
    e.recipes.create.crushing("4x tfmg:fireclay_ball", "tfmg:fireclay")
    // quark石灰岩兼容石灰粉
    e.recipes.create.crushing("tfmg:limesand", "quark:limestone")
    e.recipes.create.milling("tfmg:limesand", "quark:limestone")
    // 铝土矿作为副矿产生
    e.recipes.create.crushing(
        [
            "create:crushed_raw_iron",
            Item.of("create:crushed_raw_aluminum")
                .withChance(0.3),
            Item.of("create:experience_nugget")
                .withChance(0.75)
        ],
        [
        "minecraft:raw_iron"
        ]
    )
        .id("create:crushing/raw_iron")
    e.recipes.create.crushing(
        [
            "9x create:crushed_raw_iron",
            Item.of("create:crushed_raw_aluminum")
                .withChance(0.3)
                .withCount(9),
            Item.of("create:experience_nugget")
                .withChance(0.75)
                .withCount(9)
        ],
        [
            "minecraft:raw_iron_block"
        ]
    )
        .id("create:crushing/raw_iron_block")
    // 乙烯合成配方修改
    e.recipes.create.mixing(
        [
            Fluid.of("tfmg:liquid_plastic", 500)
        ],
        [
            Fluid.of("tfmg:ethylene", 1000),
            Fluid.of("ad_astra:oxygen", 1000)
        ]
    )
        .id("tfmg:mixing/liquid_plastic_from_ethylene")
        .heated()
    // 聚丙烯合成配方
    e.recipes.create.mixing(
        [
            Fluid.of("dimensionalrelics:polypropylene", 500)
        ],
        [
            Fluid.of("ad_astra:oxygen", 1000),
            Fluid.of("tfmg:propylene", 1000)
        ]
    ).heated()
    e.recipes.create.compacting(
        "dimensionalrelics:polypropylene",
        [
            Fluid.of("dimensionalrelics:polypropylene", 200)
        ]
    )
    // 聚氯乙烯
    e.recipes.create.mixing(
        Fluid.of("dimensionalrelics:polyvinyl_chloride", 1000),
        [
            Fluid.of("tfmg:ethylene", 1000),
            Fluid.of("mekanism:chlorine", 200)
        ]
    ).heated()
    e.recipes.create.compacting(
        "dimensionalrelics:polyvinyl_chloride",
        [
            Fluid.of("dimensionalrelics:polyvinyl_chloride")
        ]
    )
    // 聚苯乙烯
    e.recipes.create.mixing(
        Fluid.of("dimensionalrelics:polystyrene", 1000),
        [
            Fluid.of("tfmg:ethylene", 1000),
            Fluid.of("dimensionalrelics:benzene", 200)
        ]
    ).heated()
    e.recipes.create.compacting(
        "dimensionalrelics:polystyrene",
        [
            Fluid.of("dimensionalrelics:polystyrene")
        ]
    )
    // 高分子化合物合成
    e.recipes.create.mixing(
        ["2x dimensionalrelics:super_polymer"],
        [
            "tfmg:plastic_sheet",
            "dimensionalrelics:polypropylene",
            "dimensionalrelics:polystyrene",
            "dimensionalrelics:polyvinyl_chloride"
        ]
    ).superheated()
    
    // 航空纤维
    e.recipes.create.mixing(
        ["dimensionalrelics:aviation_fibers"],
        [
            "dimensionalrelics:super_polymer",
            "vintageimprovements:steel_wire",
            Fluid.of("tfmg:liquid_plastic", 200)
        ]
    )
    // 航空纤维板
    let iner_1 = "tfmg:coal_sheet"
    e.recipes.create.sequenced_assembly("dimensionalrelics:aviation_fibers_sheet", "tfmg:coal_sheet", [
        e.recipes.create.deploying(iner_1, [iner_1, "dimensionalrelics:aviation_fibers"]),
        e.recipes.create.filling(iner_1, [iner_1, Fluid.of("tfmg:liquid_plastic", 100)]),
    ])
        .transitionalItem(iner_1)
        .loops(3)
    // 石油分馏
    e.custom(
        {
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
        }
    ).id("tfmg:fractional_distillation/crude_oil")
    // 重油分馏
    e.custom(
        {
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
        }
    ).id("tfmg:fractional_distillation/heavy_oil")
    // 煤油裂解
    e.custom(
        {
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
        }
    ).id("tfmg:distillation/kerosene")
    // 杂酚油裂解
    e.custom(
        {
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
        }
    ).id("tfmg:distillation/creosote")
    // 石脑油分馏提纯
    e.custom(
        {
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
        }
    ).id("tfmg:fractional_distillation/naphtha")
    // 石脑油裂解
    e.custom(
        {
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
        }
    ).id("tfmg:distillation/naphtha")

    // 移除古早配方
    remove_recipes_id(e, [
        "tfmg:fractional_distillation/crude_oil_sus",
        "tfmg:fractional_distillation/heavy_oil",
        "tfmg:distillation/heavy_oil",
        "tfmg:mixing/liquid_plastic_from_propylene",
        "tfmg:mixing/cast_iron_ingot",
        "tfmg:compacting/plastic_molding"
    ])
})

ServerEvents.tags("fluid", e => {

})
