const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    Gmail_Pass:process.env.Gmail_Pass,
    Gmail_Mail:process.env.Gmail_Mail
   
}