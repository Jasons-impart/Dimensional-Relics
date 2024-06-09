MMEvents.registerPorts(e => {
    e.create("test_port")
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
})