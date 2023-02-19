import express from 'express';
import notificationController from '../controllers/notificationController';
import validationMiddleware from '../middlewares/requestValidator';
import notificationRequestValidation from '../validations/emailValidation';

const router = express.Router();

router.get('/v', (req, res) => {
    res.send(`App Version: ${process.env.APP_VERSION}`);
  });
  
  router.post(
    '/api/webhook',
    notificationRequestValidation,
    validationMiddleware,
    notificationController.sendNotification
  );

export default router;