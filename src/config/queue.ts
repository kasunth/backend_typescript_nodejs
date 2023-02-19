import Bull from "bull";

//  insert_data - topic name hard coded 
const insertDataQueue = new Bull(`insert_data`, {
  redis: {
    host: `${process.env.QUEUE_REDIS_HOST}`,
    port: parseInt(`${process.env.QUEUE_REDIS_PORT}`),
    username: `${process.env.QUEUE_REDIS_USER_NAME}`,
    password: `${process.env.QUEUE_REDIS_PASSWORD}`,
  },
});


//  send_email - topic name hard coded 

const sendEmailQueue = new Bull(`send_email`, {
  redis: {
    host: `${process.env.QUEUE_REDIS_HOST}`,
    port: parseInt(`${process.env.QUEUE_REDIS_PORT}`),
    username: `${process.env.QUEUE_REDIS_USER_NAME}`,
    password: `${process.env.QUEUE_REDIS_PASSWORD}`,
  },
});

export default {
    insertDataQueue,
    sendEmailQueue
  };
  