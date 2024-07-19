ServerEvents.recipes(e => {
    e.remove({output:'ars_nouveau:imbuement_chamber'})
    e.remove({id:'ars_nouveau:imbuement_manipulation_essence'})
    e.remove({id:'ars_nouveau:imbuement_fire_essence'})
    e.remove({id:'ars_nouveau:scribes_table'})
    //灌注室
    e.shaped(Item.of('ars_nouveau:imbuement_chamber'),[
        "ABA",
        "ACA",
        "ADA"
    ],{
        A:"ars_nouveau:archwood_planks",
        B:"elementalcraft:swift_alloy_ingot",
        C:"ars_nouveau:source_gem",
        D:"botania:terrasteel_ingot"
    })
    //操纵之精华
    e.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
          "tag": "forge:gems/source"
        },
        "output": "ars_nouveau:manipulation_essence",
        "pedestalItems": [
          {"item": {
              "item": "minecraft:redstone"}},
          {"item": {
              "item": "minecraft:piston"}},
          {"item": {
              "item": "minecraft:clock"}}
        ],
        "source": 2000
      })
      //火之精华
    e.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
          "tag": "forge:gems/source"
        },
        "output": "ars_nouveau:fire_essence",
        "pedestalItems": [
          {
            "item": {
              "item": "minecraft:flint_and_steel"
            }
          },
          {
            "item": {
              "item": "minecraft:campfire"
            }
          },
          {
            "item": {
              "item": "minecraft:gunpowder"
            }
          }
        ],
        "source": 2000
      })
    //抄写桌
    e.shaped('ars_nouveau:scribes_table',[
        "AAA",
        "B B",
        "C C"
    ],{
        A:'ars_nouveau:archwood_slab',
        B:'minecraft:gold_ingot',
        C:'#forge:logs/archwood'
    })
})