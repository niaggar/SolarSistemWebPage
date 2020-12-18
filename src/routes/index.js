const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html');
});

router.get('/info', (req, res) => {
  res.render('info.html');
});

router.get('/contact', (req, res) => {
  res.render('contact.html');
});

router.post('/send-email', async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  contenidoHTML = ` 
    <h1>Datos de usuarios</h1>
    <ul>
      <li>Nombre: ${nombre}</li>
      <li>Correo: ${correo}</li>
    </ul>
    <p>${mensaje}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'golden.rau84@ethereal.email',
        pass: 'Mvn4GgpMwjcPus8Zsp'
    },
    tls: {
      rejectUnauthorized: false,
    }
  });

  const info = await transporter.sendMail({
    from: 'Contacto --- Proyecto Planetas',
    to: 'niagar25@gmail.com',
    subject: 'Contacto del sitio web',
    html: contenidoHTML,
  });

  console.log('Mensaje enviado ', info.messageId);
  res.render('succes.html');
});


module.exports = router;