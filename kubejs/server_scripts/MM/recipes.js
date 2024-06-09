MMEvents.createProcesses(e => {
    e.create("mm:test_recipe")
        .structureId("mm:test_structure")
        .ticks(1000)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:glass",
                count: 10
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 1000
            }
        })
})