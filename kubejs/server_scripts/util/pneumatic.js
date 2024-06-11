// priority: 100
var pneumatic_recipes = /** @class */ (function () {
    function pneumatic_recipes() {
    }
    pneumatic_recipes.pressure_chamber = function (event, outputs, inputs, pressure) {
        if (pressure === void 0) { pressure = 1.5; }
        var recipe = {
            type: "pneumaticcraft:pressure_chamber",
            pressure: pressure,
            inputs: [],
            results: []
        };
        outputs.forEach(function (output) {
            recipe.results.push({
                item: output[0],
                count: output.length > 1 ? output[1] : 1
            });
        });
        inputs.forEach(function (input) {
            if (input[0][0] == '#') {
                recipe.inputs.push({
                    type: "pneumaticcraft:stacked_item",
                    tag: input[0].slice(1),
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
    };
    return pneumatic_recipes;
}());
