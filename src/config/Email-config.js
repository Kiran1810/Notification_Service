const nodemailer=require('nodemailer')


const{Gmail_Mail,Gmail_Pass}=require('./server-config')


const mailSender = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:Gmail_Mail,
        password:Gmail_Pass
    }
})


module.exports=mailSender