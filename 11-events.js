const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.emit('response')

customEmitter.on('response',(name , id)=>{
    console.log(`data received ${name} , ${id}`)
})


customEmitter.on('response',()=>{
    console.log(`some other logic received`)
})
//mulitple events can have same name they all will be emitted
//listen for event then we emit order matters 
//we can pass the arguments when we are emtting the evnet 
customEmitter.emit('response','john',34)
