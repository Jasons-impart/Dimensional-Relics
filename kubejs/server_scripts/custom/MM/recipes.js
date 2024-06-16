MMEvents.createProcesses(function (event) {
    create_mm_process(event, "mm:polyethylene", "mm:polymerization_reactor")
        .ticks(1000)
        .input_fluid(["tfmg:liquid_plastic", 500])
        .input_energy(1000)
        .input_kinetic(128)
        .output_item(["tfmg:plastic_sheet"], ["tfmg:plastic_sheet", 1, 0.5]);
    event.create;
    create_mm_process(event, "mm:pnce_example", "mm:pncr_reactor")
        .ticks(10)
        .input_air(300, 1.0)
        .output_energy(1000);
    create_mm_process(event, "mm:pnce_example_2", "mm:pncr_reactor_2")
        .ticks(10)
        .input_energy(1000)
        .output_air(30, 1.0);
});
