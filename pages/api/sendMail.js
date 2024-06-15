import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, email, message } = req.body;

  // Configurar el transporte de nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Dependiendo del servicio de correo que quieras usar
    auth: {
      user: 'rasmailsender@gmail.com', 
      pass: 'aueuupholocxovmr', 
    },
  });

  // Configuración del correo electrónico
  let mailOptions = {
    from: 'rasmailsender@gmail.com', 
    to: 'rasmailsender@gmail.com', 
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n\n ${message}`,
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el mensaje');
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).send('Mensaje enviado con éxito');
    }
  });
};