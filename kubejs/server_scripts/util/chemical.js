/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } inputitem 
 * @param { string } inputfluid
 * @param { string } outputitem 
 */
function washing_recipe(event, inputitem, inputfluid, outputitem) {
    event.recipes.create.mixing(
        [
            outputitem,
            Fluid.of(inputfluid)
        ],
        [
            inputitem,
            Fluid.of(inputfluid)
        ]
    )
    event.custom({
        type: "lychee:item_inside",
        post: [
            {
                type: "drop_item",
                item: outputitem
            }
        ],
        item_in: [
            {
                item: inputitem
            }
        ],
        block_in: inputfluid,
        time: 5
    })
}
