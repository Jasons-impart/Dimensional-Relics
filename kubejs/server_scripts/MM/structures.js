MMEvents.createStructures(e => {
    e.create("mm:test_structure")
        .controllerId("mm:test_controller")
        .name("Test Machine")
        .layout(a => {
            a.layer([
                "BCA"
            ]).layer([
                "DDD"
            ]).key("A", {
                block: "mm:test_input"
            }).key("B", {
                block: "mm:test_output"
            }).key("D", {
                block: "minecraft:glass"
            })
        })
    e.create("mm:polymerization_reactor")
        .controllerId("mm:test_controller")
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
                block: "mm:test_energy_port_input"
            }).key("D", {
                block: "mm:test_item_port_output"
            }).key("E", {
                block: "mm:test_fluid_port_input"
            }).key("F", {
                block: "create:mechanical_mixer"
            }).key("G", {
                block: "mm:test_create_port_input"
            })
        })
})