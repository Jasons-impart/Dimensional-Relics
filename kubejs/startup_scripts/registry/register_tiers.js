// 太空合金工具等级
ItemEvents.toolTierRegistry(e => {
    e.add("space_alloy", tier => {
        tier.uses = 6000
        tier.attackDamageBonus = 16
        tier.level = 4
        tier.enchantmentValue = 0
        tier.repairIngredient = "#forge:ingots/bleak_space_alloy"
        tier.speed = 25
    })
})