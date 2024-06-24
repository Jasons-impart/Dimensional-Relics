// priority: 100
// 巧工织魔祭坛
function manaweaving_recipe(event, tier, output, quantity, items, patterns) {
    event.custom({
        type: "mna:manaweaving-recipe",
        tier: tier, // 等阶
        output: output, // 输出物品
        quantity: quantity, // 输出物品个数
        items: items, // 输入物品
        patterns: patterns // 织魔图案
    });
}
// 巧工嬗变
function manatransmutation(event, targetBlock, replaceBlock) {
    event.custom({
        type: "mna:transmutation",
        targetBlock: targetBlock,
        replaceBlock: replaceBlock
    });
}
// 巧工符文铁砧
function manaruneforging(event, tier, material, hits, pattern, output) {
    event.custom({
        type: "mna:runeforging",
        tier: tier, // 等阶
        material: material, // 材料
        hits: hits, // 次数
        pattern: pattern, // 符文模板
        output: output // 输出
    });
}
// 巧工符文锻炉
function manacrushing(event, tier, input, output, output_quantity) {
    event.custom({
        type: "mna:crushing",
        tier: tier,
        input: input, // 输入物品
        output: output, // 输出物品
        output_quantity: output_quantity // 输出物品个数
    });
}
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
