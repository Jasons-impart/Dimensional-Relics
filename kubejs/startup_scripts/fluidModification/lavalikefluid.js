BlockEvents.modification(event => {
    event.modify("dimensionalrelics:molten_iron", block => {
        block.setLightEmission(15)
    })
})