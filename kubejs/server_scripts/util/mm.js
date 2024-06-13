// priority: 100
var mm_process_builder = /** @class */ (function () {
    function mm_process_builder(event, name, structure) {
        this.builder = event.create(name).structureId(structure);
    }
    // 时间（ticks）
    mm_process_builder.prototype.ticks = function (tick) {
        this.builder.ticks(tick);
        return this;
    };
    // 输入物品[itemid, 数量（不写默认为1）, 概率（不写默认为1）]
    mm_process_builder.prototype.input_item = function () {
        var _this = this;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        items.forEach(function (item) {
            var input = {
                type: "mm:input/consume",
                chance: (item.length > 2 ? item[2] : 1),
                ingredient: {
                    type: "mm:item",
                    item: item[0],
                    count: (item.length > 1 ? item[1] : 1)
                }
            };
            _this.builder.input(input);
        });
        return this;
    };
    // 输出物品[itemid, 数量（不写默认为1）, 概率（不写默认为1）]
    mm_process_builder.prototype.output_item = function () {
        var _this = this;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        items.forEach(function (item) {
            var output = {
                type: "mm:output/simple",
                chance: (item.length > 2 ? item[2] : 1),
                ingredient: {
                    type: "mm:item",
                    item: item[0],
                    count: (item.length > 1 ? item[1] : 1)
                }
            };
            _this.builder.output(output);
        });
        return this;
    };
    // 输入流体[fluidid, xxmB, 概率（不写默认为1）]
    mm_process_builder.prototype.input_fluid = function () {
        var _this = this;
        var fluids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fluids[_i] = arguments[_i];
        }
        fluids.forEach(function (fluid) {
            var input = {
                type: "mm:input/consume",
                chance: (fluids.length > 2 ? fluids[2] : 1),
                ingredient: {
                    type: "mm:fluid",
                    fluid: fluid[0],
                    amount: fluid[1]
                }
            };
            _this.builder.input(input);
        });
        return this;
    };
    // 输出流体[fluidid, xxmB, 概率（不写默认为1）]
    mm_process_builder.prototype.output_fluid = function () {
        var _this = this;
        var fluids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fluids[_i] = arguments[_i];
        }
        fluids.forEach(function (fluid) {
            var output = {
                type: "mm:output/simple",
                chance: (fluids.length > 2 ? fluids[2] : 1),
                ingredient: {
                    type: "mm:fluid",
                    fluid: fluid[0],
                    amount: fluid[1]
                }
            };
            _this.builder.output(output);
        });
        return this;
    };
    // 输入能量(xxRF)
    mm_process_builder.prototype.input_energy = function (energy) {
        var input = {
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: energy
            }
        };
        this.builder.input(input);
        return this;
    };
    // 输出能量(xxRF)
    mm_process_builder.prototype.output_energy = function (energy) {
        var output = {
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: energy
            }
        };
        this.builder.output(output);
        return this;
    };
    // 输入应力(xxrpm)
    mm_process_builder.prototype.input_kinetic = function (kinetic) {
        var input = {
            type: "mm:input/consume",
            ingredient: {
                type: "mm:create/kinetic",
                speed: kinetic
            }
        };
        this.builder.input(input);
        return this;
    };
    // 输出应力(xxrpm)
    mm_process_builder.prototype.output_kinetic = function (kinetic) {
        var output = {
            type: "mm:output/simple",
            ingredient: {
                type: "mm:create/kinetic",
                speed: kinetic[0]
            }
        };
        this.builder.output(output);
        return this;
    };
    // 输入矿物浆液[浆液id(slurry), xxmb, 概率（不写默认为1）]
    mm_process_builder.prototype.input_slurry = function () {
        var _this = this;
        var slurrys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            slurrys[_i] = arguments[_i];
        }
        slurrys.forEach(function (slurry) {
            var input = {
                type: "mm:input/consume",
                chance: (slurry.length > 2 ? slurry[2] : 1),
                ingredient: {
                    type: "mm:mekanism/slurry",
                    slurry: slurry[0],
                    amount: slurry[1]
                }
            };
            _this.builder.input(input);
        });
        return this;
    };
    // 输出矿物浆液[浆液id(slurry), xxmb, 概率（不写默认为1）]
    mm_process_builder.prototype.output_slurry = function () {
        var _this = this;
        var slurrys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            slurrys[_i] = arguments[_i];
        }
        slurrys.forEach(function (slurry) {
            var output = {
                type: "mm:output/simple",
                chance: (slurry.length > 2 ? slurry[2] : 1),
                ingredient: {
                    type: "mm:mekanism/slurry",
                    slurry: slurry[0],
                    amount: slurry[1]
                }
            };
            _this.builder.output(output);
        });
        return this;
    };
    // 输入气体[气体id(mek气体), xxmb, 概率（不写默认为1）]
    mm_process_builder.prototype.input_gas = function () {
        var _this = this;
        var gases = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            gases[_i] = arguments[_i];
        }
        gases.forEach(function (gas) {
            var input = {
                type: "mm:input/consume",
                chance: (gas.length > 2 ? gas[2] : 1),
                ingredient: {
                    type: "mm:mekanism/gas",
                    gas: gas[0],
                    amount: gas[1]
                }
            };
            _this.builder.input(input);
        });
        return this;
    };
    // 输出气体[气体id(mek气体), xxmb, 概率（不写默认为1）]
    mm_process_builder.prototype.output_gas = function () {
        var _this = this;
        var gases = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            gases[_i] = arguments[_i];
        }
        gases.forEach(function (gas) {
            var output = {
                type: "mm:output/simple",
                chance: (gas.length > 2 ? gas[2] : 1),
                ingredient: {
                    type: "mm:mekanism/gas",
                    gas: gas[0],
                    amount: gas[1]
                }
            };
            _this.builder.output(output);
        });
        return this;
    };
    // 输入颜料[pigment_id, xxmb, 概率（不写默认为1）]
    mm_process_builder.prototype.input_pigment = function () {
        var _this = this;
        var pigments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pigments[_i] = arguments[_i];
        }
        pigments.forEach(function (pigment) {
            var input = {
                type: "mm:input/consume",
                chance: (pigment.length > 2 ? pigment[2] : 1),
                ingredient: {
                    type: "mm:mekanism/pigment",
                    pigment: pigment[0],
                    amount: pigment[1]
                }
            };
            _this.builder.input(input);
        });
        return this;
    };
    // 输出颜料[pigment_id, xxmb, 概率（不写默认为1）]
    mm_process_builder.prototype.output_pigment = function () {
        var _this = this;
        var pigments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pigments[_i] = arguments[_i];
        }
        pigments.forEach(function (pigment) {
            var output = {
                type: "mm:output/simple",
                chance: (pigment.length > 2 ? pigment[2] : 1),
                ingredient: {
                    type: "mm:mekanism/pigment",
                    pigment: pigment[0],
                    amount: pigment[1]
                }
            };
            _this.builder.output(output);
        });
        return this;
    };
    // 输入灌注液[infuse_id, xxmb, 概率（不写默认为1）]
    mm_process_builder.prototype.input_infuse = function () {
        var _this = this;
        var infuses = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            infuses[_i] = arguments[_i];
        }
        infuses.forEach(function (infuse) {
            var input = {
                type: "mm:input/consume",
                chance: (infuse.length > 2 ? infuse[2] : 1),
                ingredient: {
                    type: "mm:mekanism/infuse",
                    infuse: infuse[0],
                    amount: infuse[1]
                }
            };
            _this.builder.input(input);
        });
        return this;
    };
    // 输出灌注液[infuse_id, xxmb, 概率（不写默认为1）]
    mm_process_builder.prototype.output_infuse = function () {
        var _this = this;
        var infuses = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            infuses[_i] = arguments[_i];
        }
        infuses.forEach(function (infuse) {
            var output = {
                type: "mm:output/simple",
                chance: (infuse.length > 2 ? infuse[2] : 1),
                ingredient: {
                    type: "mm:mekanism/infuse",
                    infuse: infuse[0],
                    amount: infuse[1]
                }
            };
            _this.builder.output(output);
        });
        return this;
    };
    //  输入PCNR气体[bar, air]
    mm_process_builder.prototype.input_air = function (bar, air) {
        var input = {
            type: "mm:input/consume",
            ingredient: {
                type: "mm:pneumaticcraft/air",
                bar: bar,
                air: air
            }
        };
        this.builder.input(input);
        return this;
    };
    //  输出PCNR气体[bar, air]
    mm_process_builder.prototype.output_air = function (bar, air) {
        var output = {
            type: "mm:output/consume",
            ingredient: {
                type: "mm:pneumaticcraft/air",
                bar: bar,
                air: air
            }
        };
        this.builder.output(output);
        return this;
    };
    return mm_process_builder;
}());
function create_mm_process(event, name, structure) {
    return new mm_process_builder(event, name, structure);
}
