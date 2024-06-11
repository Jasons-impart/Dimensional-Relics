// priority: 100
// 巧工织魔祭坛
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
        tier: tier, //等阶
        material: material, //材料
        hits: hits, //次数
        pattern: pattern, //符文模板
        output: output //输出
    });
}
// 巧工符文锻炉
function manacrushing(event, tier, input, output, output_quantity) {
    event.custom({
        type: "mna:crushing",
        tier: tier,
        input: input,
        output: output,
        output_quantity: output_quantity
    });
}
