const nodemailer = require('nodemailer');

const transportador = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.email_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = transportador;
