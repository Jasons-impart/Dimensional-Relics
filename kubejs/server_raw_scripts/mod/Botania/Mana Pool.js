ServerEvents.recipes(event => {
    remove_recipes_output(event, [
        "botania:mana_string",
        "botania:mana_powder",
        "botania:mana_pearl",
        "botania:mana_diamond",
        "botania:manasteel_ingot",
        "botania:quartz_mana",
        "botania:mana_cookie",
        "botania:natura_pylon"
    ]);
    remove_recipes_id(event, [
        "botanicalmachinery:mana_infusion/mana_emerald"
    ]);
    event.recipes.botania.mana_infusion(
        "botania:manasteel_ingot",
        "#forge:ingots/steel",
        500
    );
    event.recipes.botania.mana_infusion(
        "botania:mana_string",
        "tfmg:plastic_sheet",
        500
    );
    event.recipes.botania.mana_infusion(
        "botania:quartz_mana",
        "ae2:certus_quartz_crystal",
        500
    );
    event.recipes.botania.mana_infusion(
        "botania:mana_powder",
        "enderio:grains_of_infinity",
        200
    );
    event.recipes.botania.mana_infusion(
        "botania:mana_diamond",
        "elementalcraft:contained_crystal",
        500
    );
    event.recipes.botania.mana_infusion(
        "botania:mana_pearl",
        "rftoolsbase:infused_enderpearl",
        500
    );
    //泰拉凝聚板灌注魔力绿宝石
    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
          {item: "botania:manasteel_ingot"},
          {item:'elementalcraft:earthcrystal'},
          {item: 'thermal:emerald_dust'},
          {item: "botania:mana_diamond"}
        ],
        "mana": 25000,
        "result": {
          "item": 'botanicalmachinery:mana_emerald'
        }
      })
    //自然水晶
    event.shaped(Item.of('botania:natura_pylon'),[
        " A ","ABA"," C "
    ],{A:'botania:terrasteel_ingot',
       B:'botania:mana_pylon',
       C:'botanicalmachinery:mana_emerald'
    })
    //植物魔法元素符文合成
    //风
    event.custom({
        type: "occultism:spirit_fire",
        ingredient: {item: 'dimensionalrelics:incomplete_rune_air'},
        result: {item: 'botania:rune_air'}
      })
    //火
    event.custom({
      type: "occultism:spirit_fire",
      ingredient: {item: 'dimensionalrelics:incomplete_rune_fire'},
      result: {item: 'botania:rune_fire'}
    })
    //地
    event.custom({
        type: "occultism:spirit_fire",
        ingredient: {item: 'dimensionalrelics:incomplete_rune_earth'},
        result: {item: 'botania:rune_earth'}
      })
    //水
    event.custom({
      type: "occultism:spirit_fire",
      ingredient: {item: 'dimensionalrelics:incomplete_rune_water'},
      result: {item: 'botania:rune_water'}
    })
    //魔力
    event.custom({
        type: "occultism:spirit_fire",
        ingredient: {item: 'dimensionalrelics:incomplete_rune_mana'},
        result: {item: 'botania:rune_mana'}
      })
});
