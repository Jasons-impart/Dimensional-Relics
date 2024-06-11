// priority: 100

function remove_recipes_output(event: Internal.RecipesEventJS, items: string[]) {
    event.remove({ output: items });
}

function remove_recipes_input(event: Internal.RecipesEventJS, items: string[]) {
    event.remove({ input: items });
}

function remove_recipes_id(event: Internal.RecipesEventJS, ids: string[]) {
    ids.forEach(id => {
        event.remove({ id: id });
    });
}

function remove_recipes_type(event: Internal.RecipesEventJS, types: string[]) {
    types.forEach(type => {
        event.remove({ type: type });
    });
}

function remove_recipes_mod(event: Internal.RecipesEventJS, mods: string[]) {
    mods.forEach(mod => {
        event.remove({ mod: mod });
    });
}
