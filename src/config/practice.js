const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter name: ", (name)=>{
  console.log("entered name: "+ name)
  rl.close()
})     

rl.on('close', ()=>
{
  console.log("Interface closed")
  
})