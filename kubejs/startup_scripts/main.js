// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('item', event => {
    event.create('andesite_machine')
    .parentModel('kubejs:block/andesite_machine')
    .displayName('Andesite Machine')
})