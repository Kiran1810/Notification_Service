const TicketRepository  =require('../repositories/ticket-repository')
const {AppError}=require('../utils/errors/app-error')
const {MAILER}=require('../config')
const { StatusCodes } = require('http-status-codes');
const { response } = require('express');


const ticketRepo= new TicketRepository

async function SendMail(mailFrom,mailTo,content,text){
    try{
     const response =await MAILER.sendEmail({
        from:mailFrom,
        to:mailTo,
        content:content,
        text:text
     });
     return response;

    }
    catch(error){
throw new AppError('Cannot send email',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


async function create(data){
    try{
 const response=await ticketRepo.create(data)
 return response;

    }
    catch(error){
        throw new AppError('Cannot send email',StatusCodes.INTERNAL_SERVER_ERROR)
        console.log(error)

    }
}


async function getAllPendingEmails(){
    try{
  const res=await ticketRepo.getPendingTickets()
  return response

    }
    catch(error){
        throw new AppError('Cannot find the pending tickets',StatusCodes.INTERNAL_SERVER_ERROR)
        console.log(error)
    }
}


module.exports= {SendMail,create,getAllPendingEmails}