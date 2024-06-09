MMEvents.createStructures(event => {
    event.create("mm:test_structure")
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
})