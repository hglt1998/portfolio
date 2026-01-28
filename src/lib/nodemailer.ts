// utils/nodemailer.ts
import nodemailer from 'nodemailer';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendCustomerEmail = async (email: string) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Gracias por ponerte en contacto conmigo',
    html: `Revisaré su mensaje a la mayor brevedad posible. ¡Muchas gracias por contactar conmigo! <br><br> I will check your message as soon as possible. Thanks for contact me!`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Ha habido un error al enviar el correo: ${error.message}`);
    }
    throw error;
  }
};

export const sendEmail = async (formData: FormData) => {
  const mailOptions = {
    from: formData.email,
    to: process.env.SMTP_USER,
    subject: formData.subject,
    html: formData.message,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Ha habido un error al enviar el correo: ${error.message}`);
    }
    throw error;
  }
};
