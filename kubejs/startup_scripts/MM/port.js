MMEvents.registerPorts(e => {
    e.create("test_energy_port")
        .name("Test Energy Port")
        .controllerId("mm:test_controller")
        .config("mm:energy", c => {
            c.capacity(1000000)
             .maxReceive(1000)
             .maxExtract(1000);
        })
    e.create("test_item_port")
        .name("Test Item Port")
        .controllerId("mm:test_controller")
        .config("mm:item", c => {
            c.rows(1)
             .columns(1)
        })
    e.create("test_fluid_port")
        .name("Test Fluid Port")
        .controllerId("mm:test_controller")
        .config("mm:fluid", c => {
            c.rows(1)
             .columns(1)
             .slotCapacity(10000)
        })
    e.create("test_create_port")
        .name("Test Create Port")
        .controllerId("mm:test_controller")
        .config("mm:create/kinetic", c => {
            c.stress(4)
        })
    // e.create("test_pcnr_port")
    //     .name("Test PCNR Port")
    //     .controllerId("mm:test_controller")
    //     .config("mm:pncr/pressure", c => {
    //         c.volume(5000)
    //          .dangerPressure(5)
    //          .criticalPressure(7)
    //     })
})