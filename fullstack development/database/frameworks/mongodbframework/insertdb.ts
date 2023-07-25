let {MongoClient}=require('mongodb')
let dev_url="mongodb://127.0.0.1:27017/"
let pro_url="in mongoose"

let client=new MongoClient(dev_url)
// console.log(client.connect().then((a:any)=>{console.log(a)}))
let dbconnection=async()=>{
    let dbconnect=await client.connect()
    console.log('db got connected')
   let db= client.db("apponix-akachuli-may23")
  let col= db.collection('students')
  let mydat={
    name:'vishnu',
    city:'bangaluru',
    faverMovie:'robo1',
    aim:"software"
  }
  col.insertOne(mydat)

}
dbconnection()