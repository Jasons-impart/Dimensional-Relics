// priority: 100

class mm_process_builder {
    builder: Internal.RecipeBuilderJS;
    constructor(event: Internal.RecipeEventJS, name: string, structure: ResourceLocation) {
        this.builder = event.create(name).structureId(structure);
    }

    ticks(tick: number): mm_process_builder {
        this.builder.ticks(tick);
        return this;
    }

    input_item(...items: [string, number, number][]): mm_process_builder {
        items.forEach(item => {
            let input = {
                type: "mm:input/consume",
                chance: item[2],
                ingredient: {
                    type: "mm:item",
                    item: item[0],
                    count: item[1]
                }
            };
            this.builder.input(input);
        });
        return this;
    }
}

function create_mm_process(event: Internal.RecipeEventJS, name: string, structure: ResourceLocation): mm_process_builder {
    return new mm_process_builder(event, name, structure);
}
