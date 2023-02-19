import queue from "../config/queue";
import { IEmailData } from "../interfaces/emailInterface";

// insert to the queue
const add = async (topic: string, data: IEmailData) => {
  if (topic === "insert_data") {
    return await queue.insertDataQueue.add(data);
  } else {
    return await queue.sendEmailQueue.add(data);
  }
};

export default {
  add
}
