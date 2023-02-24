
import emailRepository from "../repositories/emailRepository";
import { IEmailData } from "../interfaces/emailInterface";
import sgMail from "@sendgrid/mail";
import queueService from "./queueService";

sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

 const sendEmail = async (data: IEmailData) => {
  const { to, subject, text, html } = data; // de-structure the object

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





// const pushNotification = async (data: IEmailData) => {
//   const { to, subject, text, html } = data;
//   const email = {
//     to: to,
//     subject: subject,
//     text: text,
//     html: html,
//     delivered: false,
//   };
//   const emailDeliveryStatus = await sendEmail(email);
//   email.delivered = emailDeliveryStatus;
//   return emailRepository.save(email);
// };

// Send data to the queue ( web api service)
const pushNotification = async (data: IEmailData) => {
  const email = { ...data, delivered: false };
  return await queueService.add("insert_data", email);
};


const saveEmail = async (email: IEmailData) => {
  try {
    const savedEmail = await emailRepository.save(email);
    return savedEmail._id;
  } catch (error) {
    console.error(error);
    return "";
  }
};


const updateDeliveryStatus = async (id: string, status: boolean) => {
  return await emailRepository.updateDeliveryStatusById(id, status);
};

export default {
  pushNotification,
  sendEmail,
  saveEmail,
  updateDeliveryStatus
};
