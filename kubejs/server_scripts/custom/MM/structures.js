MMEvents.createStructures(function (event) {
    event.create("mm:polymerization_reactor")
        .controllerId("mm:steel_controller")
        .name("Polymerization Reactor")
        .layout(function (a) {
        a.layer([
            "AGA",
            "AAA",
            "BDE"
        ]).layer([
            "AAA",
            "A A",
            "ACA"
        ]).layer([
            "AAA",
            "AFA",
            "AAA"
        ]).key("A", {
            block: "tfmg:heavy_machinery_casing"
        }).key("B", {
            block: "mm:steel_energy_input"
        }).key("D", {
            block: "mm:steel_item_output"
        }).key("E", {
            block: "mm:steel_fluid_input"
        }).key("F", {
            block: "create:mechanical_mixer"
        }).key("G", {
            block: "mm:steel_create_input"
        });
    });
    event.create("mm:pncr_reactor")
        .controllerId("mm:steel_controller")
        .name("pncr Reactor")
        .layout(function (a) {
        a.layer([
            "ACB",
        ]).key("A", {
            block: "mm:Steel_pcnr_input"
        }).key("B", {
            block: "mm:steel_energy_output"
        });
    });
    event.create("mm:pncr_reactor_2")
        .controllerId("mm:steel_controller")
        .name("pncr Reactor")
        .layout(function (a) {
        a.layer([
            "ACB",
        ]).key("A", {
            block: "mm:steel_energy_input"
        }).key("B", {
            block: "mm:Steel_pcnr_output"
        });
    });
});
