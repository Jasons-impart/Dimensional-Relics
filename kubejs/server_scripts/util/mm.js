// priority: 100

/**
 * @param { Internal.RecipeEventJS } event
 * @param { string } name
 * @param { ResourceLocation_ } structure
 * @param { number } ticks
 * @param { (string | number)[][] } input_item
 * @param { (string | number)[][] } input_fluid
 * @param { number } input_energy
 * @param { number } input_kinetic
 * @param { (string | number)[][] } output_item
 * @param { (string | number)[][] } output_fluid
 */
function create_mm_process(event, name, structure, ticks,
    input_item, input_fluid, input_energy, input_kinetic, output_item, output_fluid) {
    let process = event.create(name)
        .structureId(structure)
        .ticks(ticks);

    input_item.forEach(item_count_chance => {
        let input = {
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: item_count_chance[0],
                count: (item_count_chance.length > 1 ? item_count_chance[1] : 1)
            }
        };
        if (item_count_chance.length > 2)
            input["chance"] = item_count_chance[2];
        process.input(input);
    });

    input_fluid.forEach(fluid_count_chance => {
        let input = {
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: fluid_count_chance[0],
                amount: (fluid_count_chance.length > 1 ? fluid_count_chance[1] : 1)
            }
        };
        if (fluid_count_chance.length > 2)
            input["chance"] = fluid_count_chance[2];
        process.input(input);
    });
    
    input_energy.forEach(energy_count_chance => {
        let input = {
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: energy_count_chance
            }
        }
    });
}
