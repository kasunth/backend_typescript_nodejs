
import emailRepository from "../repositories/emailRepository";
import { IEmailData } from "../interfaces/emailInterface";
import sgMail from "@sendgrid/mail";


sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

 const sendEmail = async (data: IEmailData) => {
  const { to, subject, text, html } = data;

  const msg = {
    to: to,
    from: `${process.env.SENDGRID_SENDER_EMAIL}`,
    subject: subject,
    ...(html !== undefined ? { html } : { text }),
  };

  try {
    const deliveredEmail = await sgMail.send(msg);
    return deliveredEmail[0].statusCode === 202;
  } catch (error) {
    console.error(error);
    return false;
  }
};




const pushNotification = async (data: IEmailData) => {
  const { to, subject, text, html } = data;
  const email = {
    to: to,
    subject: subject,
    text: text,
    html: html,
    delivered: false,
  };
  const emailDeliveryStatus = await sendEmail(email);
  email.delivered = emailDeliveryStatus;
  return emailRepository.save(email);
};

export default {
  pushNotification,
};
