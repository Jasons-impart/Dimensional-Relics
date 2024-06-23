// priority: 100

// 元素工艺元素灌注
var elementalcraft = /** @class */ (function () {
    function elementalcraft() {
    }
    elementalcraft.infusion = function (event, output, input, type, amount) {
        var recipe = {
            type: "elementalcraft:infusion",
            element_amount: amount,
            element_type: type,
            input: {},
            output: {
                item: output
            }
        };
        if (input[0] == "#") {
            recipe.input = {
                tag: input.slice(1)
            };
        }
        else {
            recipe.input = {
                item: input
            };
        }
        ;
        return event.custom(recipe);
    };
    return elementalcraft;
}());
//植物魔法符文祭坛
function runic_altar(event, output, ingredients, mana) {
    event.custom({
        type: "botania:runic_altar",
        output: output,
        ingredients: ingredients,
        mana: mana
    });
}
