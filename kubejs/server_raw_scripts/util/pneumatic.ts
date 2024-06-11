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

    static thermo_plant(event: Internal.RecipesEventJS) {
        return new thermo_plant_recipe_builder(event);
    }
}

interface thermo_plant_recipe {
    type: string;
    exothermic: boolean;
    fluid_input: any;
    fluid_output?: any;
    item_input?: any;
    item_output?: any;
    speed: number;
    temperature: any;
};

class thermo_plant_recipe_builder {
    event: Internal.RecipesEventJS;
    recipe: thermo_plant_recipe;
    constructor(event: Internal.RecipesEventJS) {
        this.event = event;
        this.recipe.type = "pneumaticcraft:thermo_plant";
    }

    exothermic(b: boolean) {
        this.recipe.exothermic = b;
    }

    fluid_input(fluid: string, amount: number = 1000) {
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
    }

    fluid_output(fluid: string, amount: number = 1000) {
        this.recipe.fluid_output = {
            fluid: fluid,
            amount: amount
        };
    }

    item_input(item: string, count: number = 1) {
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
    }

    item_output(item: string, count: number = 1) {
        this.recipe.item_output = {
            item: item,
            count: count
        };
    }

    speed(s: number) {
        this.recipe.speed = s;
    }

    temperature(min: number, max?: number) {
        if (max) {
            this.recipe.temperature = {
                "min_temp": min,
                "max_temp": max
            }
        }
        else {
            this.recipe.temperature = {
                "min_temp": min
            }
        }
    }

    build() {
        this.event.custom(this.recipe);
    }
}
