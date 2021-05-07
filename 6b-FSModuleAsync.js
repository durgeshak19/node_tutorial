const { readFile, writeFile} = require('fs')
console.log("Start Task")
//Error in code copy from Github Repo
//if we do not provide utf-8 we will get buffer 
readFile('./content/subfolder/first.txt','utf-8' ,(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/subfolder/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the Result:
        ${first}${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return ;
            }
            console.log(result);
            console.log("Done task")

        })
    })
})
// This is the callback Hell

console.log("Starting Next task")

