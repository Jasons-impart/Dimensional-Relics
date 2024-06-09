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
    e.create("mm:polyethylene")
        .structureId("mm:polymerization_reactor")
        .ticks(1000)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "tfmg:liquid_plastic",
                amount: 500
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 128
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "tfmg:plastic_sheet",
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            chance: 0.5,
            ingredient: {
                type: "mm:item",
                item: "tfmg:plastic_sheet",
                count: 1
            }
        })
})