StartupEvents.registry("fluid", e =>{
    e.create("dimensionalrelics:propylene")
        .thinTexture(0Xa2afa5)
        .bucketColor(0Xa2afa5)
        .translationKey("fluid.dimensionalrelics.propylene")
        .translationKey("block.dimensionalrelics.propylene")
        .translationKey("item.dimensionalrelics.propylene_bucket")
    e.create("dimensionalrelics:styrene")
        .thinTexture(0X9e9f8d)
        .bucketColor(0X9e9f8d)
        .translationKey("fluid.dimensionalrelics.styrene")
        .translationKey("block.dimensionalrelics.styrene")
        .translationKey("item.dimensionalrelics.styrene_bucket")
    e.create("dimensionalrelics:butadiene")
        .thinTexture(0X92a5a9)
        .bucketColor(0X92a5a9)
        .translationKey("fluid.dimensionalrelics.butadiene")
        .translationKey("block.dimensionalrelics.butadiene")
        .translationKey("item.dimensionalrelics.butadiene_bucket")
    e.create("dimensionalrelics:benzene")
        .thinTexture(0XF0F8FF)
        .bucketColor(0XF0F8FF)
        .translationKey("fluid.dimensionalrelics.benzene")
        .translationKey("block.dimensionalrelics.benzene")
        .translationKey("item.dimensionalrelics.benzene_bucket")
    // 安山合金混合液
    e.create("dimensionalrelics:andesite_alloy") 
        .thickTexture(0x717D7E)
        .bucketColor(0x717D7E)
        .translationKey("fluid.dimensionalrelics.andesite_alloy")
        .translationKey("block.dimensionalrelics.andesite_alloy")
        .translationKey("item.dimensionalrelics.andesite_alloy_bucket")
    // 熔融铁
    e.create("dimensionalrelics:molten_iron")
        .tag("minecraft:lava")
        .thickTexture(0XFF7F50)
        .bucketColor(0XFF7F50)
        .translationKey("fluid.dimensionalrelics.molten_iron")
        .translationKey("block.dimensionalrelics.molten_iron")
        .translationKey("item.dimensionalrelics.molten_iron_bucket")
})