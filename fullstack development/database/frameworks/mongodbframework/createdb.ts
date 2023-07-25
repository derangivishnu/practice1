let {MongoClient}=require('mongodb')
let dev_url="mongodb://127.0.0.1:27017"
let pro_url="in mongoose"
let client =new MongoClient(dev_url)

let dbconnection=async()=>{
    let dbconnect=await client.connect()
    console.log('db got created')

    let db=client.db("apponix-akachuli-may23")
    let col=db.collection('students')

    let mydata={
        name:"vishnu",
        city:"hindupur",
        favmovie:"robo1"

    }
    col.insertone(mydata)
    
}
dbconnection()