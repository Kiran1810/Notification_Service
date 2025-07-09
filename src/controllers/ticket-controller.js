const { StatusCodes } = require('http-status-codes');
const EmailService=require('../services/email-service')

const { SuccessResponse, ErrorResponse } = require('../utils/common');


async function create(req,res){
    try{
const response = await EmailService.create({
    subject:req.body.subject,
    content:req.body.content,
    RecepientEmail:req.body.RecepientEmail
})
SuccessResponse.data= response
return res
    }
    catch(error){
ErrorResponse.error=error
return res
.status(error.statusCode)
.json(ErrorResponse)
    }
}


module.exports= {create}