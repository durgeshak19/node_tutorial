const {createReadStream} = require('fs')

const stream = createReadStream('./content/subfolder/big-file.txt')

//default 64 kB
//last buffer - reaminder

//highWaterMark - control size
// const stream = createReadStream(

stream.on('data' , (result) =>{
    console.log(result)
})