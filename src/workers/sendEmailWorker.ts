import Bull from "bull";
import queue from "../config/queue";
import emailService from "../services/emailService";
import queueService from "../services/queueService";


queue.sendEmailQueue.process(async (job: Bull.Job, done: Bull.DoneCallback) => {
  const { data } = job;

  const sendEmailStatus = await emailService.sendEmail(data);

  if (sendEmailStatus) {
    await emailService.updateDeliveryStatus(data._id, true);
  } else {
    queueService.add("send_email", data);
  }

  done();
});
