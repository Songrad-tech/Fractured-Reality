// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("appliedenergistics2", id, x)
let CR = (id, x) => MOD("create", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)

ServerEvents.recipes(event => {
    console.log('Registering Recipes')
    andesiteMachine(event)
    console.log('Recipes Updated')
})

function andesiteMachine(event) {
    // Andesite
    event.shapeless(KJ('andesite_machine'), [
        CR('andesite_casing')
    ])

}