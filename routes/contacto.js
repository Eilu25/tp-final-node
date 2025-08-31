// routes/contacto.js
import { Router } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

router.get('/', (req, res) => {
  res.render('contacto', { titulo: 'Contacto' });
});

router.post('/', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
      // secure: false  // con Mailtrap no hace falta
    });

    await transporter.sendMail({
      from: `"Web" <no-reply@miweb.com>`,
      to: process.env.MAIL_TO,
      subject: 'Nuevo contacto',
      html: `
        <p><b>Nombre:</b> ${nombre || '-'}</p>
        <p><b>Email:</b> ${email || '-'}</p>
        <p><b>Mensaje:</b><br>${(mensaje || '').replace(/\n/g, '<br>')}</p>
      `
    });

    res.render('contacto', { titulo: 'Contacto', ok: true });
  } catch (e) {
    console.error('MAIL ERROR:', e);
    res.render('contacto', {
      titulo: 'Contacto',
      error: 'No se pudo enviar el mail. Revisá las credenciales SMTP en .env'
    });
  }
});

export default router;
