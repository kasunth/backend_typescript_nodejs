import { Request, Response } from 'express';
import notificationService from '../services/emailService';
import getResponse from '../helpers/apiResponse';

const sendNofification = async (req: Request, res: Response) => {
  notificationService.saveNotification(req.body);
  return getResponse(res, true, '200', {});
};

export default {
  sendNofification,
};
