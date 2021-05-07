const {readFileSync , writeFileSync} = require('fs')
console.log("Start Task")
//synchoronusly ie Blocking they will run one after another
const first = readFileSync('./content/subfolder/first.txt','utf-8');
const second = readFileSync('./content/subfolder/second.txt','utf-8');
console.log(first,second);

writeFileSync('./content/result-sync.txt',`Here is the Result:
${first}${second}`,{flag:'a'})


console.log("Done task")
console.log("Starting Next task")

