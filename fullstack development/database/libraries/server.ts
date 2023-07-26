require('./config/db.config')
var {User}=require('./src')

let ganga=new User({name:'ganga',class:'fullstack',chocalate:
"dairy milk"})
ganga.save()