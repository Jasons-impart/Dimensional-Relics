// priority: 100

// 巧工织魔祭坛
function manaweaving_recipe(event: Internal.RecipesEventJS,
    tier: number, output: string[], quantity: number, items: string[], patterns: string[]) {
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
function manatransmutation(event: Internal.RecipesEventJS,
    targetBlock: string, replaceBlock: string) {
    event.custom({
        type: "mna:transmutation",
        targetBlock: targetBlock,
        replaceBlock: replaceBlock
    });
}
// 巧工符文铁砧
function manaruneforging(event: Internal.RecipesEventJS,
    tier: number, material: string, hits: number, pattern: string[], output: string) {
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
function manacrushing(event: Internal.RecipesEventJS,
    tier: number, input: string, output: string, output_quantity: number) {
    event.custom({
        type: "mna:crushing",
        tier: tier,
        input: input, // 输入物品
        output: output, // 输出物品
        output_quantity: output_quantity // 输出物品个数
    })
}

    // 元素工艺元素灌注
class infusion_builder {
    builder: Internal.RecipeBuilderJS;
    constructor(event: Internal.RecipesEventJS,
        output: string, input: string, type: string, amount: number) {
            let recipe = {
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
                }
            }
            else {
                recipe.input = {
                    item: input
                }
            };
            this.builder = event.custom(recipe)
        }
}

// class elementalcraft_recipes {
//     static infusion(event: Internal.RecipesEventJS) {
//         return new infusion_builder(event);
//     }
// }
// class infusion_builder{
//     constructor(event: Internal.RecipesEventJS,
//         output: string, input: string, type: string, amount: number) {
//         let recipe = {
//             type: "elementalcraft:infusion",
//             element_amount: amount,
//             element_type: type,
//             input: {},
//             output: {
//                 item: output
//             }
//         }
//         if (input[0] == "#") {
//             recipe.input = {
//                 tag: input.slice(1)
//             }
//         }
//         else {
//             recipe.input = {
//                 item: input
//             }
//         };
//         event.custom(recipe)
//     }
// }


//  {
//     "type": "elementalcraft:infusion",
//     "element_amount": 1000,
//     "element_type": "water",
//     "input": {
//       "item": "elementalcraft:inert_crystal"
//     },
//     "output": {
//       "item": "elementalcraft:watercrystal"
//     }
//   }
// function infusion(event:Internal.RecipesEventJS,
//     amount:number,type:string,input: string,output: string){
//         var item1:string='item'
//         var item2:string='item'
//         var i:string
//         var j:string[];
//         j=[input,output]
//         for (i in j){
//             if (input.slice(5)=="fogre"){
//                 if (i==input){
//                     item1="tag"
//                     break
//                 }
//                 item2="tag"
//         }}
//     event.custom({
//         type: "elementalcraft:infusion",
//         elementamount: amount,
//         elementtype: type,
//         input:{
//             item1: input
//         },
//         output:{
//             item2: output
//         }
//     })
// }
