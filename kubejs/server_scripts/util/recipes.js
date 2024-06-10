// priority: 100
function remove_recipes_output(event, items) {
    event.remove({ output: items });
}
function remove_recipes_input(event, items) {
    event.remove({ input: items });
}
function remove_recipes_id(event, ids) {
    ids.forEach(function (id) {
        event.remove({ id: id });
    });
}
function remove_recipes_type(event, types) {
    types.forEach(function (type) {
        event.remove({ type: type });
    });
}
function remove_recipes_mod(event, mods) {
    mods.forEach(function (mod) {
        event.remove({ mod: mod });
    });
}
