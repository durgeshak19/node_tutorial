// const {readFile}  =require('fs');
// const { result } = require('lodash');

// console.log('Started a first task')
// readFile('./content/subfolder/first.txt','utf-8',(err,res)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(result)
//     console.log('completed first task')
// })

// console.log('starting new task')
// console.log('new task')

const http =require('http')
const server = http.createServer((req,res)=>{
    console.log('request event');
    res.end('Hello world')
    
})

server.listen(5000,()=>{
    console.log("Sever listnenign on port 5000 ")
})