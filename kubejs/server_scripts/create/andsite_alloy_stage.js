ServerEvents.recipes(e => {
  e.recipes.minecraft.crafting_shaped(
    "enderio:primitive_alloy_smelter",
    [
        "ABA",
        "BCB",
        "CCC",
    ],{
        A:"minecraft:cobblestone",
        B:"minecraft:furnace",
        C:"minecraft:iron_ingot"
    }
  )
  .id("enderio:primitive_alloy_smelter")
  e.recipes.enderio.alloy_smelting(
    '2x create:andesite_alloy',
    [
       "3x minecraft:iron_nugget",
       "2x minecraft:andesite",
       "2x minecraft:kelp"
    ]
  )
  // e.recipes.minecraft.crafting_shaped(
  //   "create:gearbox",
  //   [
  //       " A ",
  //       "ABA",
  //       " A ",
  //   ],{
  //       A:"create:cogwheel",
  //       B:"create:large_cogwheel"
  //   }
  // )
  // .id("create:crafting/kinetics/gearbox")
  e.recipes.minecraft.crafting_shaped(
    "4x create:shaft",
    [
        "A",
        "A",
    ],{
        A:"create:andesite_alloy"
    }
  )
  .id("create:crafting/kinetics/shaft")
})