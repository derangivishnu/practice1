let http=require('http')
console.log(http)

let fs=require('fs')
http.createServer((req:any,res:any)=>{
    if(req.url=="/chotu"){
        res.write("will give you chocolate")
        res.end()
    }
    if(req.url=="/motu"){
        res.write("i like somosa")
        res.end()
    }
    if(req.url=="/lambu"){
        res.write("wife")
        res.end()
    }
}).listen(8005,()=>{console.log("server started")})