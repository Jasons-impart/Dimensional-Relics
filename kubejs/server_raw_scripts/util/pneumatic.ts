// priority: 100

class pneumatic_recipes {
    static pressure_chamber(event: Internal.RecipesEventJS,
        outputs: (string | number)[][], inputs: (string | number)[][], pressure: number = 1.5) {
        let recipe = {
            type: "pneumaticcraft:pressure_chamber",
            pressure: pressure,
            inputs: [],
            results: []
        };
        outputs.forEach(output => {
            recipe.results.push({
                item: output[0],
                count: output.length > 1 ? output[1] : 1
            });
        });
        inputs.forEach(input => {
            if (input[0][0] == '#') {
                recipe.inputs.push({
                    type: "pneumaticcraft:stacked_item",
                    tag: (input[0] as string).slice(1),
                    count: input.length > 1 ? input[1] : 1
                });
            }
            else {
                recipe.inputs.push({
                    type: "pneumaticcraft:stacked_item",
                    item: input[0],
                    count: input.length > 1 ? input[1] : 1
                });
            }
        });
        event.custom(recipe);
    }
}
