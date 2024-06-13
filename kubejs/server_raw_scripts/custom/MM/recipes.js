MMEvents.createProcesses(event => {
    create_mm_process(event, "mm:polyethylene", "mm:polymerization_reactor")
        .ticks(1000)
        .input_fluid(["tfmg:liquid_plastic", 500])
        .input_energy(1000)
        .input_kinetic(128)
        .output_item(
            ["tfmg:plastic_sheet"],
            ["tfmg:plastic_sheet", 1, 0.5]
        );
    // create_mm_process(event, "mm:energy1", "mm:pne_reactor")
    //     .ticks(1)
    //     .input_air(3.5, 100)
    //     .output_energy(1000)
    // create_mm_process(event, "mm:energy2", "mm:pne_reactor2")
    //     .ticks(1)
    //     .input_energy(1000)
    //     .output_air(3.5, 100)
});