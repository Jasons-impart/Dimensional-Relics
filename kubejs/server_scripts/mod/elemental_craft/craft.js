ServerEvents.recipes(function (event) {
    remove_recipes_input(event, [
        "elementalcraft:scroll_paper",
        "elementalcraft:minor_rune_slate",
        "elementalcraft:major_rune_slate",
        "elementalcraft:rune_slate",
        "elementalcraft:shrinebase",
    ]);
    remove_recipes_output(event, [
        "elementalcraft:shrine_upgrade_fortune",
        "elementalcraft:purifier",
        "elementalcraft:spell_desk",
        "elementalcraft:scroll_paper",
    ]);
    // 元素提取器
    event.remove({ output: "elementalcraft:extractor" });
    event.shaped("elementalcraft:extractor", [
        " A ",
        " B ",
        "CDC"
    ], {
        A: "minecraft:iron_ingot",
        B: "elementalcraft:contained_crystal",
        C: "integrateddynamics:crystalized_menril_chunk",
        D: "elementalcraft:elementpipe_impaired"
    });
    // 元素容器
    event.remove({ output: "elementalcraft:small_container" });
    event.shaped("elementalcraft:small_container", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "elementalcraft:elementpipe_impaired",
        B: "create:fluid_tank"
    });
    // 弱化元素导管
    event.remove({ output: "elementalcraft:elementpipe_impaired" });
    event.shaped(Item.of("elementalcraft:elementpipe_impaired", 4), [
        " A ",
        "ABA",
        " A "
    ], {
        A: "integrateddynamics:cable",
        B: "elementalcraft:contained_crystal"
    });
    // 元素导管
    event.remove({ output: "elementalcraft:elementpipe" });
    event.shaped(Item.of("elementalcraft:elementpipe", 4), [
        " A ",
        "ABA",
        " A "
    ], {
        A: "elementalcraft:elementpipe_impaired",
        B: "elementalcraft:drenched_iron_ingot"
    });
    // 进阶元素导管
    event.remove({ output: "elementalcraft:elementpipe_improved" });
    event.shaped("4x elementalcraft:elementpipe_improved", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "elementalcraft:elementpipe",
        B: "elementalcraft:swift_alloy_ingot"
    });
    // 元素灌注
    event.remove({ output: "elementalcraft:infuser"});
    event.shaped(Item.of("elementalcraft:infuser"),[
        " A ",
        "ABA",
        "CCC"],{
            A:'botania:manasteel_ingot',
            B:'elementalcraft:contained_crystal',
            C:"occultism:otherstone"
    });
});
