const fs = require("fs")
const biodata ={
    name:"saurabh",
    age:22,
    job:"webdev",
}
const jsondata = JSON.stringify(biodata)
// console.log(biodata.name)
// console.log(jsondata.name)
// const objdata = JSON.parse(jsondata);
// console.log(objdata)
// fs.writeFile("me.json",jsondata,(err)=>{
//     console.log("done")
// })
fs.readFile("me.json","utf-8",(err,data)=>{
    console.log(data)
})
