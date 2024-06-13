MMEvents.registerPorts(e => {
    e.create("steel_energy")
        .name("Steel Energy")
        .controllerId("mm:steel_controller")
        .config("mm:energy", c => {
            c.capacity(1000000)
             .maxReceive(1000)
             .maxExtract(1000);
        })
    e.create("steel_item")
        .name("Steel Item")
        .controllerId("mm:steel_controller")
        .config("mm:item", c => {
            c.rows(1)
             .columns(1)
        })
    e.create("steel_fluid")
        .name("Steel Fluid")
        .controllerId("mm:Steel_controller")
        .config("mm:fluid", c => {
            c.rows(1)
             .columns(1)
             .slotCapacity(10000)
        })
    e.create("steel_create")
        .name("Steel Create")
        .controllerId("mm:steel_controller")
        .config("mm:create/kinetic", c => {
            c.stress(4)
        })
        
    // e.create("Steel_pcnr")
    //     .name("Steel PCNR")
    //     .controllerId("mm:Steel_controller")
    //     .config("mm:pneumaticcraft/air", c => {
    //         c.volume(5000)
    //     })
})