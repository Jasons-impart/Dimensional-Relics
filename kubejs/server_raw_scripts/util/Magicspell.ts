// priority: 100

// 元素工艺元素灌注
class elementalcraft{
    static infusion(event: Internal.RecipesEventJS,
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
        return event.custom(recipe);
    }
}
    //植物魔法符文祭坛
    function runic_altar(event: Internal.RecipesEventJS,
     output:(string|number),ingredients:string[],mana:number
    ) {event.custom({
        type:"botania:runic_altar",
        output:output,
        ingredients:ingredients,
        mana:mana})
        
    }