ServerEvents.recipes(function (e) {
    remove_recipes_input(e, [
        'elementalcraft:scroll_paper',
        'elementalcraft:minor_rune_slate',
        'elementalcraft:major_rune_slate',
        'elementalcraft:rune_slate',
        'elementalcraft:shrinebase'
    ]);
    remove_recipes_output(e, [
        'elementalcraft:shrine_upgrade_fortune',
        'elementalcraft:purifier',
        'elementalcraft:spell_desk',
        'elementalcraft:scroll_paper'
    ]);
    //元素提取器
    e.remove({ output: 'elementalcraft:extractor' });
    e.shaped(Item.of('elementalcraft:extractor', 1), [
        ' A ',
        ' B ',
        'CDC'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'elementalcraft:contained_crystal',
        C: 'integrateddynamics:crystalized_menril_chunk',
        D: "elementalcraft:elementpipe_impaired"
    });
    //元素容器
    e.remove({ output: 'elementalcraft:small_container' });
    e.shaped(Item.of('elementalcraft:small_container', 1), [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'elementalcraft:elementpipe_impaired',
        B: 'create:fluid_tank'
    });
    //弱化元素导管
    e.remove({ output: 'elementalcraft:elementpipe_impaired' });
    e.shaped(Item.of('elementalcraft:elementpipe_impaired', 4), [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'integrateddynamics:cable',
        B: 'elementalcraft:contained_crystal'
    });
    //元素导管
    e.remove({ output: 'elementalcraft:elementpipe' });
    e.shaped(Item.of('elementalcraft:elementpipe', 4), [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'elementalcraft:elementpipe_impaired',
        B: 'elementalcraft:drenched_iron_ingot'
    });
    //进阶元素导管
    e.remove({ output: 'elementalcraft:elementpipe_improved' });
    e.shaped(Item.of('elementalcraft:elementpipe_improved', 4), [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'elementalcraft:elementpipe',
        B: 'elementalcraft:swift_alloy_ingot'
    });
});
