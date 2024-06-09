MMEvents.registerPorts(event => {
    event.create("test_port")
        .name("Test Energy Port")
        .controllerId("mm:test_controller")
        .config("mm:energy", c => {
            c.capacity(1000000)
             .maxReceive(1000)
             .maxExtract(1000);
    })
})