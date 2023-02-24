import Bull from "bull";
import queue from "../config/queue";
import emailService from "../services/emailService";
import queueService from "../services/queueService";

//listen 
queue.insertDataQueue.process(
  async (job: Bull.Job, done: Bull.DoneCallback) => {
    const { data } = job;

    const savedEmailId = await emailService.saveEmail(data);

    if (savedEmailId !== "") { // if email response saved to db  then send to queue to email
      const email = { ...data, _id: savedEmailId };
      queueService.add("send_email", email);
    } else {
      queueService.add("insert_data", data); // id save email failed to db again add email message to the queue 
    }

    done();
  }
);
