ServerEvents.recipes(e => {
    // 海带粉及合成盐
    e.recipes.create.milling(
        "dimensionalrelics:kelp_dust",
        "minecraft:dried_kelp"
    )
    e.recipes.create.crushing(
        "dimensionalrelics:kelp_dust",
        "minecraft:dried_kelp"
    )
    e.recipes.create.mixing(
        [
            Fluid.of("mekanism:brine", 1000)
        ],
        [
            "dimensionalrelics:kelp_dust",
            Fluid.of("water", 1000)
        ]
    )
    // 锰
    e.recipes.create.crushing(
        [
            "dimensionalrelics:crush_raw_manganese",
            Item.of("create:crushed_raw_iron")
                .withChance(0.3),
            Item.of("create:crushed_raw_aluminum")
                .withChance(0.1),
            Item.of("create:experience_nugget")
                .withChance(0.75)
        ],
        [
            "dimensionalrelics:raw_manganese"
        ]
    ).id("create:crushing/raw_manganses")
    e.recipes.create.crushing(
        [
            "dimensionalrelics:crush_raw_manganese",
            Item.of("dimensionalrelics:crush_raw_manganese")
                .withChance(0.75),
            Item.of("create:crushed_raw_iron")
                .withChance(0.3),
            Item.of("create:crushed_raw_aluminum")
                .withChance(0.1),
            Item.of("create:experience_nugget")
                .withChance(0.75),
            Item.of("minecraft:cobblestone")
                .withChance(0.12)
        ],
        [
            "dimensionalrelics:manganese_ore"
        ]
    )
        .id("create:crushing/manganses_ore")
    e.recipes.minecraft.smelting(
        "dimensionalrelics:manganese",
        "dimensionalrelics:crush_raw_manganese"
    ).id("minecraft:smelting/manganse")
    e.recipes.minecraft.blasting(
        "dimensionalrelics:manganese",
        "dimensionalrelics:crush_raw_manganese"
    ).id("minecraft:blasting/manganse")
    e.recipes.minecraft.smelting(
        "dimensionalrelics:manganese",
        "dimensionalrelics:manganese_ore"
    ).id("minecraft:smelting/manganese_ore")
    e.recipes.minecraft.blasting(
        "dimensionalrelics:manganese",
        "dimensionalrelics:manganese_ore"
    ).id("minecraft:blasting/manganese_ore")
    e.recipes.minecraft.smelting(
        "dimensionalrelics:manganese",
        "dimensionalrelics:raw_manganese"
    ).id("minecraft:smelting/raw_manganese")
    e.recipes.minecraft.blasting(
        "dimensionalrelics:manganese",
        "dimensionalrelics:raw_manganese"
    ).id("minecraft:blasting/raw_manganese")
    // 钴
    e.recipes.create.crushing(
        [
            "dimensionalrelics:crush_raw_cobalt",
            Item.of("create:crushed_raw_copper")
                .withChance(0.3),
            Item.of("create:experience_nugget")
                .withChance(0.75)
        ],
        [
            "dimensionalrelics:raw_cobalt"
        ]
    ).id("create:crushing/raw_cobalt")
    e.recipes.create.crushing(
        [
            "dimensionalrelics:crush_raw_cobalt",
            Item.of("dimensionalrelics:crush_raw_cobalt")
                .withChance(0.75),
            Item.of("create:crushed_raw_copper")
                .withChance(0.3),
            Item.of("create:experience_nugget")
                .withChance(0.75),
            Item.of("minecraft:cobblestone")
                .withChance(0.12)
        ],
        [
            "dimensionalrelics:cobalt_ore"
        ]
    )
        .id("create:crushing/cobalt_ore")
    e.recipes.minecraft.smelting(
        "dimensionalrelics:cobalt",
        "dimensionalrelics:crush_raw_cobalt"
    ).id("minecraft:smelting/cobalt")
    e.recipes.minecraft.blasting(
        "dimensionalrelics:cobalt",
        "dimensionalrelics:crush_raw_cobalt"
    ).id("minecraft:blasting/cobalt")
    e.recipes.minecraft.smelting(
        "dimensionalrelics:cobalt",
        "dimensionalrelics:cobalt_ore"
    ).id("minecraft:smelting/cobalt_ore")
    e.recipes.minecraft.blasting(
        "dimensionalrelics:cobalt",
        "dimensionalrelics:cobalt_ore"
    ).id("minecraft:blasting/cobalt_ore")
    e.recipes.minecraft.smelting(
        "dimensionalrelics:cobalt",
        "dimensionalrelics:raw_cobalt"
    ).id("minecraft:smelting/raw_cobalt")
    e.recipes.minecraft.blasting(
        "dimensionalrelics:cobalt",
        "dimensionalrelics:raw_cobalt"
    ).id("minecraft:blasting/raw_cobalt")
    // 锂
    e.recipes.create.crushing(
        [
            "dimensionalrelics:crush_raw_lithium",
            Item.of("create:crushed_raw_copper")
                .withChance(0.3),
            Item.of("create:experience_nugget")
                .withChance(0.75)
        ],
        [
            "dimensionalrelics:raw_lithium"
        ]
    ).id("create:crushing/raw_lithium")
    e.recipes.create.crushing(
        [
            "dimensionalrelics:crush_raw_lithium",
            Item.of("dimensionalrelics:crush_raw_lithium")
                .withChance(0.75),
            Item.of("create:crushed_raw_copper")
                .withChance(0.3),
            Item.of("create:experience_nugget")
                .withChance(0.75),
            Item.of("minecraft:cobblestone")
                .withChance(0.12)
        ],
        [
            "dimensionalrelics:lithium_ore"
        ]
    )
        .id("create:crushing/lithium_ore")
    e.recipes.minecraft.smelting(
        "dimensionalrelics:lithium",
        "dimensionalrelics:crush_raw_lithium"
    ).id("minecraft:smelting/lithium")
    e.recipes.minecraft.blasting(
        "dimensionalrelics:lithium",
        "dimensionalrelics:crush_raw_lithium"
    ).id("minecraft:blasting/lithium")
    e.recipes.minecraft.smelting(
        "dimensionalrelics:lithium",
        "dimensionalrelics:lithium_ore"
    ).id("minecraft:smelting/lithium_ore")
    e.recipes.minecraft.blasting(
        "dimensionalrelics:lithium",
        "dimensionalrelics:lithium_ore"
    ).id("minecraft:blasting/lithium_ore")
    e.recipes.minecraft.smelting(
        "dimensionalrelics:lithium",
        "dimensionalrelics:raw_lithium"
    ).id("minecraft:smelting/raw_lithium")
    e.recipes.minecraft.blasting(
        "dimensionalrelics:lithium",
        "dimensionalrelics:raw_lithium"
    ).id("minecraft:blasting/raw_lithium")
    // 煤粉、木炭粉清洗
    washing_recipe(e,
        "mekanism:dust_coal",
        "mekanism:sulfuric_acid",
        "dimensionalrelics:carbon_dust")
    washing_recipe(e,
        "mekanism:dust_charcoal",
        "mekanism:sulfuric_acid",
        "dimensionalrelics:carbon_dust")

    // 氢氧化钠
    // 次氯酸钠
    // 盐
    // 电解食盐水
    // 电解食盐
    // 锂遇水爆炸生成NaOH
    e.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": "dimensionalrelics:lithium"
            },
            "block_in": {
                "blocks": ["water"]
            },
            "post": [
                {
                    "type": "execute",
                    "command": "summon minecraft:tnt ~ ~1 ~ {fuse:0,explosionpower:5}"
                },
                {
                    "type": "place",
                    "block": "dimensionalrelics:lithium_hydroxide"
                }
            ]
        })
    // 锂与水缓慢反应生成NaOH
    // 钠遇水爆炸生成NaOH
    e.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": "dimensionalrelics:sodium"
            },
            "block_in": {
                "blocks": ["water"]
            },
            "post": [
                {
                    "type": "execute",
                    "command": "summon minecraft:tnt ~ ~1 ~ {fuse:0,explosionpower:5}"
                },
                {
                    "type": "place",
                    "block": "dimensionalrelics:sodium_hydroxide_fluid"
                }
            ]
        })
    // 钠与水缓慢反应生成NaOH
    // NaOH+Cl2
    // 甲烷合成H2
    // CO2生成
    // 合成氨
    // 合成尿素
    // 合成肼
    // 合成偏二甲肼
    // 合成HCl
    // 合成氯化铵（侯氏制碱法）
    // 碳酸氢钠加热转变成碳酸钠
    e.recipes.create.mixing(
        [
            "dimensionalrelics:sodium_carbonate",
            Fluid.of("water", 1000),
            Fluid.of("dimensionalrelics:carbon_dioxide", 1000)
        ],
        [
            "2x dimensionalrelics:sodium_bicarbonate"
        ]
    )
        .heated()
    // 碳酸钠加盐酸转变为NaCl
    // 炭粉碎
    e.recipes.create.crushing(
        [
            "mekanism:dust_coal",
            Item.of("mekanism:dust_coal").withChance(0.25)
        ],
        [
            "minecraft:coal"
        ])
        .id("create:crushing/coal")
    e.recipes.create.crushing([
        "mekanism:dust_charcoal",
        Item.of("mekanism:dust_charcoal").withChance(0.25)
    ],
        [
            "minecraft:charcoal"
        ])
        .id("create:crushing/charcoal")
    // MnO2合成
    // 干电池合成
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "tag": "forge:plates/zinc"
            },
            "loops": 1,
            "results": [
                {
                    "item": "dimensionalrelics:disposable_batteries"
                }
            ],
            "sequence": [
                {
                    "type": "create:pressing",
                    "ingredients": [
                        {
                            "item": "dimensionalrelics:incompleted_disposable_batteries"
                        }
                    ],
                    "results": [
                        {
                            "item": "dimensionalrelics:incompleted_disposable_batteries"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "dimensionalrelics:incompleted_disposable_batteries"
                        },
                        {
                            "item": "dimensionalrelics:manganese_dioxide"
                        }
                    ],
                    "results": [
                        {
                            "item": "dimensionalrelics:incompleted_disposable_batteries"
                        }
                    ]
                },
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": "dimensionalrelics:incompleted_disposable_batteries"
                        },
                        {
                            "fluid": "dimensionalrelics:ammonium_chloride",
                            "amount": 200
                        }
                    ],
                    "results": [
                        {
                            "item": "dimensionalrelics:incompleted_disposable_batteries"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "dimensionalrelics:incompleted_disposable_batteries"
                        },
                        {
                            "item": "dimensionalrelics:carbon_rod"
                        }
                    ],
                    "results": [
                        {
                            "item": "dimensionalrelics:incompleted_disposable_batteries"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "dimensionalrelics:incompleted_disposable_batteries"
                        },
                        {
                            "tag": "forge:plates/zinc"
                        }
                    ],
                    "results": [
                        {
                            "item": "dimensionalrelics:incompleted_disposable_batteries"
                        }
                    ]
                },
                {
                    "type": "create:pressing",
                    "ingredients": [
                        {
                            "item": "dimensionalrelics:incompleted_disposable_batteries"
                        },
                    ],
                    "results": [
                        {
                            "item": "dimensionalrelics:incompleted_disposable_batteries"
                        }
                    ]
                }
            ],
            "transitionalItem": {
                "item": "dimensionalrelics:incompleted_disposable_batteries"
            }
        }
    )
        .id("dimensionalrelics:crafting/disposable_batteries")
    // 干电池回收
    e.recipes.create.crushing(
        [
            Item.of("create:zinc_ingot"),
            Item.of("create:zinc_nugget").withChance(0.3).withCount(3),
            Item.of("dimensionalrelics:carbon_dust").withCount(2)
        ],
        [
            Item.of("dimensionalrelics:disposable_batteries", "{Damage:128000}").weakNBT()
        ]
    ).id("dimensionalrelics:recycle_batteries")
    // CO2+LiOH=Li2CO3
    // CoO合成
    e.recipes.create.mixing(
        [
            "dimensionalrelics:cobaltous_oxide"
        ],
        [
            "dimensionalrelics:cobalt"
        ]
    )
        .superheated()
    // 钴酸锂合成
    e.recipes.create.mixing(
        [
            "2x dimensionalrelics:lithium_oxidocobalt",
            Fluid.of("dimensionalrelics:carbon_dioxide", 1000)
        ],
        [
            "dimensionalrelics:lithium_carbonate",
            "2x dimensionalrelics:cobaltous_oxide"
        ]
    )
        .superheated()
    // 锂电池合成
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "dimensionalrelics:super_polymer"
            },
            "loops": 1,
            "results": [
                {
                    "item": "dimensionalrelics:lithium_battery",
                    "nbt": {
                        "Damage": 1600000
                    }

                }
            ],
            "sequence": [
                {
                    "type": "create:pressing",
                    "ingredients": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        }
                    ],
                    "results": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        },
                        {
                            "item": "dimensionalrelics:carbon_dust"
                        }
                    ],
                    "results": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        },
                        {
                            "item": "dimensionalrelics:polypropylene"
                        }
                    ],
                    "results": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                },
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        },
                        {
                            "fluid": "dimensionalrelics:lithium_hydroxide",
                            "amount": 200
                        }
                    ],
                    "results": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        },
                        {
                            "item": "dimensionalrelics:lithium_oxidocobalt"
                        }
                    ],
                    "results": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        },
                        {
                            "tag": "forge:plates/aluminum"
                        }
                    ],
                    "results": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                },
                {
                    "type": "create:pressing",
                    "ingredients": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        },
                    ],
                    "results": [
                        {
                            "item": "dimensionalrelics:incompleted_lithium_battery"
                        }
                    ]
                }
            ],
            "transitionalItem": {
                "item": "dimensionalrelics:incompleted_lithium_battery"
            }
        }
    ).id("dimensionalrelics:crafting/lithium_battery")
})
