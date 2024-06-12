ServerEvents.recipes(event => {
    remove_recipes_output(event, [
        "create:belt_connector",
        "create:encased_chain_drive",
        "create:white_sail",
        "create:chute",
        "create:portable_storage_interface",
        "create:fluid_pipe",
        "create:fluid_valve",
        "create:smart_fluid_pipe",
        "create:mechanical_pump",
        "create:item_drain",
        "create:hose_pulley",
        "create:spout",
        "create:portable_fluid_interface",
        "create:fluid_tank",
        "create:water_wheel",
        "create:large_water_wheel",
    ]);
    // 传送带
    event.recipes.minecraft.crafting_shaped(
        "create:belt_connector", [
        "   ",
        "AAA",
        "AAA",
    ], {
        A: "thermal:cured_rubber"
    });
    // 链式传动箱
    event.recipes.minecraft.crafting_shaped(
        "create:encased_chain_drive", [
        " A ",
        "BCB",
        " A ",
    ], {
        A: "create:shaft",
        B: "create:cogwheel",
        C: "create:andesite_casing"
    });
    // 风帆        
    event.recipes.minecraft.crafting_shaped(
        "create:white_sail", [
        "AAA",
        "ABA",
        "AAA",
    ], {
        A: "minecraft:stick",
        B: "#minecraft:wool_carpets"
    });
    // 溜槽
    event.recipes.minecraft.crafting_shaped(
        "2x create:chute", [
        "A A",
        "A A",
        "A A",
    ], {
        A: "create:iron_sheet"
    });
    // 移动式存储接口
    event.recipes.minecraft.crafting_shaped(
        "create:portable_storage_interface", [
        " A ",
        " B ",
        " C ",
    ], {
        A: "create:andesite_casing",
        B: "thermal:cured_rubber",
        C: "create:chute"
    });
    // 流体管道
    event.recipes.minecraft.crafting_shaped(
        "4x create:fluid_pipe", [
        "A A",
        "A A",
        "A A",
    ], {
        A: "create:copper_sheet"
    });
    // 流体阀门
    event.recipes.minecraft.crafting_shaped(
        "create:fluid_valve", [
        "A A",
        "ABA",
        "A A",
    ], {
        A: "create:copper_sheet",
        B: "create:iron_sheet"
    });
    // 智能流体管道
    event.recipes.minecraft.crafting_shaped(
        "create:smart_fluid_pipe", [
        "A A",
        "ABC",
        "A A",
    ], {
        A: "create:copper_sheet",
        B: "create:iron_sheet",
        C: "create:electron_tube"
    });
    // 动力泵
    event.recipes.minecraft.crafting_shaped(
        "create:mechanical_pump", [
        "A A",
        "BCB",
        "A A",
    ], {
        A: "create:copper_sheet",
        B: "create:cogwheel",
        C: "create:iron_sheet"
    });
    // 铁丝网
    event.recipes.minecraft.crafting_shaped(
        "3x quark:grate",
        [
            "AA",
            "AA",
        ], {
            A:"minecraft:chain"
        }
    ).id("quark:building/crafting/grate")
    // 分液池
    event.recipes.minecraft.crafting_shaped(
        "create:item_drain", [
        "AAA",
        "B B",
        "BBB",
    ], {
        A: "quark:grate",
        B: "create:copper_sheet"
    });
    // 软管滑轮
    event.recipes.minecraft.crafting_shaped(
        "create:hose_pulley", [
        " A ",
        " B ",
        " C ",
    ], {
        A: "create:copper_casing",
        B: "create:shaft",
        C: "thermal:cured_rubber_block"
    });
    // 注液器
    event.recipes.minecraft.crafting_shaped(
        "create:spout", [
        " A ",
        " B ",
        " C ",
    ], {
        A: "create:copper_casing",
        B: "#c:glass_blocks",
        C: "thermal:cured_rubber"
    });
    // 移动式流体接口
    event.recipes.minecraft.crafting_shaped(
        "create:portable_fluid_interface", [
        " A ",
        "B B",
        "C C",
    ], {
        A: "create:copper_casing",
        B: "thermal:cured_rubber",
        C: "create:copper_sheet"
    });
    // 流体储罐
    event.recipes.minecraft.crafting_shaped(
        "create:fluid_tank", [
        "AAA",
        "B B",
        "AAA",
    ], {
        A: "create:copper_sheet",
        B: "#forge:glass"
    });
    // 桨叶   
    event.recipes.minecraft.crafting_shaped(
        "4x dimensionalrelics:watermill_blade", [
        "AAA",
        "AAA",
        "BBB",
    ], {
        A: "#minecraft:planks",
        B: "minecraft:stick"
    });
    // 水车
    event.recipes.minecraft.crafting_shaped(
        "create:water_wheel", [
        " A ",
        "ABA",
        " A ",
    ], {
        A: "dimensionalrelics:watermill_blade",
        B: "create:cogwheel"
    });
    // 大水车    
    event.recipes.minecraft.crafting_shaped(
        "create:large_water_wheel", [
        "AAA",
        "ABA",
        "AAA",
    ], {
        A: "dimensionalrelics:watermill_blade",
        B: "create:water_wheel"
    });
});
