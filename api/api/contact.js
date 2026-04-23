import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { nombre, email, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.es",
    port: 465,
    secure: true, 
    auth: {
      user: "info@deosyron.com",
      pass: process.env.SMTP_PASSWORD, 
    },
  });

  try {
    await transporter.sendMail({
      from: '"Web Deosyron" <info@deosyron.com>',
      to: "info@deosyron.com", 
      replyTo: email,
      subject: `Nuevo mensaje de ${nombre}`,
      text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al enviar el correo' });
  }
}