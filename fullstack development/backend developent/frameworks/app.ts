let express = require("express")
let app =express()
app.get('/home',(req:any,res:any)=>{
console.log("i got hitted by submit")
res.send("hello i am u r first api")
})
app.listen(8000,()=>{
    console.log("server is running on http://localhost:8000/")
})