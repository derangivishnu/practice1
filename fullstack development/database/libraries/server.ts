require('./config/db.config')
var {User}=require('./src')

let ganga=new User({name:'ganga',class:'fullstack',chocalate:
"dairy milk"})
ganga.save()

let data={name:"vishnu",class:'fullstack',fmovie:'kabali'}
let vishnu= new User(data)
vishnu.save()

let finder=async()=>{
    let findall=await User.find({name:'vishnu'})
    console.log(findall)
}
finder()

let deleter=async()=>{
    let findall=await User.deleteOne({chocalate:"dairy milk"})
    console.log(deleter)
}
deleter()

let updater =async()=>{
    let findall=await User.updateOne({name:"vishnu"},{$set:{fmovie:"candy"}})
}
updater()