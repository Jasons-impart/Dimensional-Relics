MMEvents.createProcesses(event => {
    create_mm_process(event, "test", "mm:polymerization_reactor", 1000,
        [["minecraft:dirt", 1, 0.5], ["minecraft:redstone"]],
        [],
        0,
        0,
        [],
        []
    );
    event.create("mm:polyethylene")
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
        });
});
