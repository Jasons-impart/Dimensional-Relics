// priority: 100
function remove_recipes_output(event, items) {
    event.remove({ output: items });
}
function remove_recipes_input(event, items) {
    event.remove({ input: items });
}
function remove_recipes_id(event, ids) {
    ids.forEach(function (id) {
        event.remove({ id: id });
    });
}
function remove_recipes_type(event, types) {
    types.forEach(function (type) {
        event.remove({ type: type });
    });
}
function remove_recipes_mod(event, mods) {
    mods.forEach(function (mod) {
        event.remove({ mod: mod });
    });
}
function manaweaving_recipe(event, tier, output, quantity, items, patterns) {
    event.custom({
        type: "mna:manaweaving-recipe",
        tier: tier, // 等阶
        output: output, // 输出物品
        quantity: quantity, // 输出个数
        items: items, // 输入物品
        patterns: patterns // 织魔图案
    });
}
function manatransmutation(event, targetBlock, replaceBlock) {
    event.custom({
        type: "mna:transmutation",
        targetBlock: targetBlock,
        replaceBlock: replaceBlock
    });
}
