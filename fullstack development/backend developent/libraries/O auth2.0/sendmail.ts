let nodemailer=require('nodemailer')
let mytoken='fzldmdwelctrjnvc'
let mailSender=async(name:any,email:any,subject:any,text:any)=>{
let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'derangivishnuvardhan@gmail.com',
        pass:'fzldmdwelctrjnvc'
    },
    tls: {
        rejectUnauthorized: false
      }
})

let mailoptions={
    from:'derangivishnuvardhan@gmail.com',
    to:`${email}`,
    subject:`${subject}`,
    text:`Hi ${name}${text}`
}
transporter.sendMail(mailoptions,(err:any,res:any)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail sent successfully')
    }
})
}

mailSender('waseem sir','waseemahmed116@gmail.com','test mail','hi sir how are u')