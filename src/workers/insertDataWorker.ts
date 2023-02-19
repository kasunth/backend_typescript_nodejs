import Bull from "bull";
import queue from "../config/queue";
import emailService from "../services/emailService";
import queueService from "../services/queueService";

queue.insertDataQueue.process(
  async (job: Bull.Job, done: Bull.DoneCallback) => {
    const { data } = job;

    const savedEmailId = await emailService.saveEmail(data);

    if (savedEmailId !== "") {
      const email = { ...data, _id: savedEmailId };
      queueService.add("send_email", email);
    } else {
      queueService.add("insert_data", data);
    }

    done();
  }
);
