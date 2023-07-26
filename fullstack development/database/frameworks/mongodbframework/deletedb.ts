import {MongoClient as Mo2} from 'mongodb'
let dev_url3="mongodb://127.0.0.1:27017/appomix-kass-ponam-mony-march23"
let conn=new Mo2(dev_url3)
let connect=async()=>{
    await conn.connect()
    console.log("db connetced")
    let db=conn.db('appomix-kass-ponam-mony-march23')
    let taable=db.collection('students')
    let data=await taable.deleteOne({name:'shashi'})
    console.log(data)
}
connect()