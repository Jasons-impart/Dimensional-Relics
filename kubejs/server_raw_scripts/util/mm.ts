// priority: 100

class mm_process_builder {
    builder: Internal.RecipeBuilderJS;
    constructor(event: Internal.RecipeEventJS, name: string, structure: ResourceLocation) {
        this.builder = event.create(name).structureId(structure);
    }
    // 时间（ticks）
    ticks(tick: number): mm_process_builder {
        this.builder.ticks(tick);
        return this;
    }
    // 输入物品[itemid, 数量（不写默认为1）, 概率（不写默认为1）]
    input_item(...items: (string | number)[][]): mm_process_builder {
        items.forEach(item => {
            let input = {
                type: "mm:input/consume",
                chance: (item.length > 2 ? item[2] : 1),
                ingredient: {
                    type: "mm:item",
                    item: item[0],
                    count: (item.length > 1 ? item[1] : 1)
                }
            };
            this.builder.input(input);
        });
        return this;
    }
    // 输出物品[itemid, 数量（不写默认为1）, 概率（不写默认为1）]
    output_item(...items: (string | number)[][]): mm_process_builder {
        items.forEach(item => {
            let output = {
                type: "mm:output/simple",
                chance: (item.length > 2 ? item[2] : 1),
                ingredient: {
                    type: "mm:item",
                    item: item[0],
                    count: (item.length > 1 ? item[1] : 1)
                }
            };
            this.builder.output(output)
        });
        return this;
    }
    // 输入流体[fluidid, xxmB, 概率（不写默认为1）]
    input_fluid(...fluids: (string | number)[][]): mm_process_builder {
        fluids.forEach(fluid => {
            let input = {
                type: "mm:input/consume",
                chance: (fluids.length > 2 ? fluids[2] : 1),
                ingredient: {
                    type: "mm:fluid",
                    fluid: fluid[0],
                    amount: fluid[1]
                }
            };
            this.builder.input(input)
        });
        return this
    }
    // 输出流体[fluidid, xxmB, 概率（不写默认为1）]
    output_fluid(...fluids: (string | number)[][]): mm_process_builder {
        fluids.forEach(fluid => {
            let output = {
                type: "mm:output/simple",
                chance: (fluids.length > 2 ? fluids[2] : 1),
                ingredient: {
                    type: "mm:fluid",
                    fluid: fluid[0],
                    amount: fluid[1]
                }
            };
            this.builder.output(output)
        });
        return this
    }
    // 输入能量(xxRF)
    input_energy(energy: number ): mm_process_builder {
        let input = {
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: energy
            }
        };
        this.builder.input(input);
        return this
    }
    // 输出能量(xxRF)
    output_energy(energy: number): mm_process_builder {
        let output = {
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: energy
            }
        };
        this.builder.output(output);
        return this
    }
    // 输入应力(xxrpm)
    input_kinetic(kinetic: number): mm_process_builder {
        let input = {
            type: "mm:input/consume",
            ingredient: {
                type: "mm:create/kinetic",
                speed: kinetic
            }
        };
        this.builder.input(input);
        return this
    }
    // 输出应力(xxrpm)
    output_kinetic(kinetic: number): mm_process_builder {
        let output = {
            type: "mm:output/simple",
            ingredient: {
                type: "mm:create/kinetic",
                speed: kinetic[0]
            }
        };
        this.builder.output(output);
        return this
    }
    // 输入矿物浆液[浆液id(slurry), xxmb, 概率（不写默认为1）]
    input_slurry(...slurrys: (string | number)[][]): mm_process_builder {
        slurrys.forEach(slurry => {
            let input = {
                type: "mm:input/consume",
                chance: (slurry.length > 2 ? slurry[2] : 1),
                ingredient: {
                    type: "mm:mekanism/slurry",
                    slurry: slurry[0],
                    amount: slurry[1]
                }
            };
            this.builder.input(input)
        });
        return this
    }
    // 输出矿物浆液[浆液id(slurry), xxmb, 概率（不写默认为1）]
    output_slurry(...slurrys: (string | number)[][]): mm_process_builder {
        slurrys.forEach(slurry => {
            let output = {
                type: "mm:output/simple",
                chance: (slurry.length > 2 ? slurry[2] : 1),
                ingredient: {
                    type: "mm:mekanism/slurry",
                    slurry: slurry[0],
                    amount: slurry[1]
                }
            };
            this.builder.output(output)
        });
        return this
    }
    // 输入气体[气体id(mek气体), xxmb, 概率（不写默认为1）]
    input_gas(...gases: (string | number)[][]): mm_process_builder {
        gases.forEach(gas => {
            let input = {
                type: "mm:input/consume",
                chance: (gas.length > 2 ? gas[2] : 1),
                ingredient: {
                    type: "mm:mekanism/gas",
                    gas: gas[0],
                    amount: gas[1]
                }
            };
            this.builder.input(input)
        });
        return this
    }
    // 输出气体[气体id(mek气体), xxmb, 概率（不写默认为1）]
    output_gas(...gases: (string | number)[][]): mm_process_builder {
        gases.forEach(gas => {
            let output = {
                type: "mm:output/simple",
                chance: (gas.length > 2 ? gas[2] : 1),
                ingredient: {
                    type: "mm:mekanism/gas",
                    gas: gas[0],
                    amount: gas[1]
                }
            };
            this.builder.output(output)
        });
        return this
    }
    // 输入颜料[pigment_id, xxmb, 概率（不写默认为1）]
    input_pigment(...pigments: (string | number)[][]): mm_process_builder {
        pigments.forEach(pigment => {
            let input = {
                type: "mm:input/consume",
                chance: (pigment.length > 2 ? pigment[2] : 1),
                ingredient: {
                    type: "mm:mekanism/pigment",
                    pigment: pigment[0],
                    amount: pigment[1]
                }
            };
            this.builder.input(input)
        });
        return this
    }
    // 输出颜料[pigment_id, xxmb, 概率（不写默认为1）]
    output_pigment(...pigments: (string | number)[][]): mm_process_builder {
        pigments.forEach(pigment => {
            let output = {
                type: "mm:output/simple",
                chance: (pigment.length > 2 ? pigment[2] : 1),
                ingredient: {
                    type: "mm:mekanism/pigment",
                    pigment: pigment[0],
                    amount: pigment[1]
                }
            };
            this.builder.output(output)
        });
        return this
    }
    // 输入灌注液[infuse_id, xxmb, 概率（不写默认为1）]
    input_infuse(...infuses: (string | number)[][]): mm_process_builder {
        infuses.forEach(infuse => {
            let input = {
                type: "mm:input/consume",
                chance: (infuse.length > 2 ? infuse[2] : 1),
                ingredient: {
                    type: "mm:mekanism/infuse",
                    infuse: infuse[0],
                    amount: infuse[1]
                }
            };
            this.builder.input(input)
        });
        return this
    }
    // 输出灌注液[infuse_id, xxmb, 概率（不写默认为1）]
    output_infuse(...infuses: (string | number)[][]): mm_process_builder {
        infuses.forEach(infuse => {
            let output = {
                type: "mm:output/simple",
                chance: (infuse.length > 2 ? infuse[2] : 1),
                ingredient: {
                    type: "mm:mekanism/infuse",
                    infuse: infuse[0],
                    amount: infuse[1]
                }
            };
            this.builder.output(output)
        });
        return this
    }
    //  输入PCNR气体[bar, air]
    input_air(bar: number, air: number): mm_process_builder {
        let input = {
            type: "mm:input/consume",
            ingredient: {
                type: "mm:pneumaticcraft/air",
                bar: bar,
                air: air
            }
        };
        this.builder.input(input)
        return this
    }
    //  输出PCNR气体[bar, air]
    output_air(bar: number, air: number): mm_process_builder {
        let output = {
            type: "mm:output/consume",
            ingredient: {
                type: "mm:pneumaticcraft/air",
                bar: bar,
                air: air
            }
        };
        this.builder.output(output)
        return this
    }
}

function create_mm_process(event: Internal.RecipeEventJS, name: string, structure: ResourceLocation): mm_process_builder {
    return new mm_process_builder(event, name, structure);
}
