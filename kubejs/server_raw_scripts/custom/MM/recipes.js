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
});
