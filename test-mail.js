import 'dotenv/config';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const main = async () => {
  try {
    await transporter.sendMail({
      from: '"Mi Web 👨‍💻" <no-reply@miweb.com>',
      to: process.env.MAIL_TO,
      subject: 'Prueba Mailtrap ✔',
      text: 'Hola, este es un mail de prueba desde Node.js',
      html: '<b>Hola!</b><br>Este es un mail de <i>prueba</i> desde Node.js 🚀'
    });
    console.log('✅ Mail enviado (chequeá tu Inbox en Mailtrap)');
  } catch (err) {
    console.error('❌ Error al enviar mail:', err.message);
  }
};

main();
