ServerEvents.recipes(e => {
  remove_recipes_mod(e, [
    "createaddition"
  ]);
  remove_recipes_type(e, [
    "industrialforegoing:fluid_extractor"
  ])
  remove_recipes_output(e, [
    "industrialforegoing:latex",
    "industrialforegoing:fluid_extractor"
  ]);
  remove_recipes_input(e, [
    "industrialforegoing:latex"
  ])
  remove_recipes_id(e, [
    "enderio:cake",
    "farmersdelight:cake_from_milk_bottle",
    "minecraft:cake",
    "create:crafting/curiosities/cake"
  ]);
});
