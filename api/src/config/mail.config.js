const nodemailer = require('nodemailer');
const name = require('../models/Users.js');
const mail = {
    user: 'thefullstackstoree@gmail.com',
    pass: 'crpujzwivvakhcqh'
}

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    tls: {
        rejectUnauthorized: false
    },
    secure: true, // true for 465, false for other ports
    auth: {
      user: mail.user, // generated ethereal user
      pass: mail.pass, // generated ethereal password
    },
  });

  const sendEmail = async (email, subject, html) => {
    try {
        
        await transporter.sendMail({
            from: `The Full Stacks Store<${ mail.user }>`, // sender address
            to: email, // list of receivers
            subject, // Subject line
            text: "Bienvenido a The Full Stack Store", // plain text body
            html, // html body
        });

    } catch (error) {
        console.log('Algo no va bien con el email', error);
    }
  }

  const getTemplate = (email, token) => {
      return `
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        
        <div id="email___content">
            <img src="https://www.flickr.com/photos/197399024@N05/52623616952/in/dateposted-public/" alt="">
            <h2>Hola ${ email }</h2>
            <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
            <a
                href="http://localhost:3000/user/confirm/${token}"
                target="_blank"
            >Confirmar Cuenta</a>
        </div>
      `;
  }

  module.exports = {
    sendEmail,
    getTemplate}