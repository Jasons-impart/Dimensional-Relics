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
function manatransmutation(event, targetBlock,replaceBlock){
    event.custom({
        type: "mna:transmutation",
        targetBlock: targetBlock,
        replaceBlock: replaceBlock
    })
}