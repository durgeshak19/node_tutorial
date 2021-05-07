const os = require('os')
//Info about User
const user = os.userInfo()
// console.log(user)

//method return the systemup time in seconds

// console.log(`System Uptime is ${os.uptime()}`)

const currentOS = {
    name:os.type(),
    os : os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS)