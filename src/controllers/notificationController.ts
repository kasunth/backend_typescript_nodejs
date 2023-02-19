import { Request, Response } from 'express';
import notificationService from '../services/emailService';
import getResponse from '../helpers/apiResponse';

const sendNotification = async (req: Request, res: Response) => {
  notificationService.pushNotification(req.body);  // here we push the notification to the queue
  return getResponse(res, false, '200', {});
};

export default {
  sendNotification,
};
