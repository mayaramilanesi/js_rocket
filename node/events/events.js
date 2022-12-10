const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.on('saySomething',() => { // once (ouve o evento apenas uma vez)
      console.log('eu ouvi você')
})

ev.emit('SaySomething')
ev.emit('SaySomething')