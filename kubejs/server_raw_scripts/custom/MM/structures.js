MMEvents.createStructures(event => {
    event.create("mm:polymerization_reactor")
        .controllerId("mm:steel_controller")
        .name("Polymerization Reactor")
        .layout(a => {
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
});
MMEvents.createStructures(function (event) {
    event.create("mm:pne_reactor")
        .controllerId("mm:steel_controller")
        .name("press1")
        .layout(function (a) {
        a.layer([
            "ACB",
        ]).key("A", {
            block: "mm:Steel_pcnr_input"
        }).key("B", {
            block: "mm:steel_energy_output"
        });
    });
    event.create("mm:pne_reactor2")
        .controllerId("mm:steel_controller")
        .name("press2")
        .layout(function (a) {
        a.layer([
            "BCA",
        ]).key("A", {
            block: "mm:Steel_pcnr_output"
        }).key("B", {
            block: "mm:steel_energy_input"
        });
    });
});