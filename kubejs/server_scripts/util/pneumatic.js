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
        return event.custom(recipe);
    };
    pneumatic_recipes.thermo_plant = function (event) {
        return new thermo_plant_recipe_builder(event);
    };
    return pneumatic_recipes;
}());
;
var thermo_plant_recipe_builder = /** @class */ (function () {
    function thermo_plant_recipe_builder(event) {
        this.event = event;
        this.recipe.type = "pneumaticcraft:thermo_plant";
    }
    thermo_plant_recipe_builder.prototype.exothermic = function (b) {
        this.recipe.exothermic = b;
    };
    thermo_plant_recipe_builder.prototype.air_use_multiplier = function (air_use) {
        this.recipe.air_use_multiplier = air_use;
    };
    thermo_plant_recipe_builder.prototype.fluid_input = function (fluid, amount) {
        if (amount === void 0) { amount = 1000; }
        if (fluid[0] == '#') {
            this.recipe.fluid_input = {
                type: "pneumaticcraft:fluid",
                tag: fluid.slice(1),
                amount: amount
            };
        }
        else {
            this.recipe.fluid_input = {
                type: "pneumaticcraft:fluid",
                fluid: fluid,
                amount: amount
            };
        }
    };
    thermo_plant_recipe_builder.prototype.fluid_output = function (fluid, amount) {
        if (amount === void 0) { amount = 1000; }
        this.recipe.fluid_output = {
            fluid: fluid,
            amount: amount
        };
    };
    thermo_plant_recipe_builder.prototype.item_input = function (item, count) {
        if (count === void 0) { count = 1; }
        if (item[0] == '#') {
            this.recipe.item_input = {
                tag: item.slice(1),
                count: count
            };
        }
        else {
            this.recipe.item_input = {
                item: item,
                count: count
            };
        }
    };
    thermo_plant_recipe_builder.prototype.item_output = function (item, count) {
        if (count === void 0) { count = 1; }
        this.recipe.item_output = {
            item: item,
            count: count
        };
    };
    thermo_plant_recipe_builder.prototype.speed = function (s) {
        this.recipe.speed = s;
    };
    thermo_plant_recipe_builder.prototype.temperature = function (min, max) {
        if (max) {
            this.recipe.temperature = {
                "min_temp": min,
                "max_temp": max
            };
        }
        else {
            this.recipe.temperature = {
                "min_temp": min
            };
        }
    };
    thermo_plant_recipe_builder.prototype.build = function () {
        this.event.custom(this.recipe);
    };
    return thermo_plant_recipe_builder;
}());
