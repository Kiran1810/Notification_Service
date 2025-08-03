const TicketRepository  =require('../repositories/ticket-repository')
const AppError=require('../utils/errors/app-error')
const {MAILER}=require('../config')
const { StatusCodes } = require('http-status-codes');
const { response } = require('express');


const ticketRepo= new TicketRepository

async function SendEmail(mailFrom,mailTo,content,text){
    try{
    const response = await MAILER.sendMail({
  from: mailFrom,
  to: mailTo,
  subject: "Notification from booking system",
  text: text,
  html: `<p>${content}</p>`
});
     return response;

    }
    catch(error){
throw new AppError('Cannot send email',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


async function createTicket(data){
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


module.exports= {SendEmail,createTicket,getAllPendingEmails}