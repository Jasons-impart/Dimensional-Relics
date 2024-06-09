MMEvents.createStructures(e => {
    e.create("mm:polymerization_reactor")
        .controllerId("mm:steel_controller")
        .name("Polymerization Reactor")
        .layout(a => {
            a.layer([
                "AAA",
                "AAA",
                "BDE"
            ]).layer([
                "AAA",
                "A A",
                "ACA"
            ]).layer([
                "AAA",
                "AFA",
                "AGA"
            ]).key("A", {
                block: "tfmg:heavy_machinery_casing"
            }).key("B", {
                block: "mm:steel_energy_port_input"
            }).key("D", {
                block: "mm:steel_item_port_output"
            }).key("E", {
                block: "mm:steel_fluid_port_input"
            }).key("F", {
                block: "create:mechanical_mixer"
            }).key("G", {
                block: "mm:steel_create_port_input"
            })
        })
})