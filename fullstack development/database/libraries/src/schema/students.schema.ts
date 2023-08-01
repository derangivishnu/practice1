let {Schema}=require('mongoose')
let mangoose=require('mongoose')
let studentStruc=new Schema({
    name:String,
    class:String,
    chocalate:String,
    fmovie:String
})
module.exports=mangoose.model('User',studentStruc)