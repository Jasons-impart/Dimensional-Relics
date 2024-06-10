// priority: 100
/// <reference path="../../probe/generated/internals/internal_26.d.ts" />
/// <reference path="../../probe/generated/internals/internal_12.d.ts" />
var mm_process_builder = /** @class */ (function () {
    function mm_process_builder(event, name, structure) {
        this.builder = event.create(name).structureId(structure);
    }
    mm_process_builder.prototype.ticks = function (tick) {
        this.builder.ticks(tick);
        return this;
    };
    mm_process_builder.prototype.input_item = function () {
        var _this = this;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        items.forEach(function (item) {
            var input = {
                type: "mm:input/consume",
                chance: item[2],
                ingredient: {
                    type: "mm:item",
                    item: item[0],
                    count: item[1]
                }
            };
            _this.builder.input(input);
        });
        return this;
    };
    return mm_process_builder;
}());
function create_mm_process(event, name, structure) {
    return new mm_process_builder(event, name, structure);
}
