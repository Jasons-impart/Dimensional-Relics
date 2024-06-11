// priority: 100

function washing_recipe(event: Internal.RecipesEventJS,
    inputitem: string, inputfluid: string, outputitem: string) {
    event.recipes.create.mixing([
        outputitem,
        Fluid.of(inputfluid)
    ], [
        inputitem,
        Fluid.of(inputfluid)
    ]);
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
    });
}
