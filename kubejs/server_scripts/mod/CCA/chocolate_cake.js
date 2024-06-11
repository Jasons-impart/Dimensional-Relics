ServerEvents.recipes(function (event) {
    event.recipes.create.filling("createaddition:chocolate_cake", [
        Fluid.of("create:chocolate", 500),
        "ratatouille:cake_base"
    ]).id("create:filling/chocolate_cake");
});
