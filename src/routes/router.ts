import express from 'express';
import notificationController from '../controllers/notificationController';
import validationMiddleware from '../middlewares/requestValidator';
import notificationRequestValidation from '../validations/emailValidation';

// define the router handle the routers for all requests

const router = express.Router();

// health check api
router.get('/v', (req, res) => {
    res.send(`App Version: ${process.env.APP_VERSION}`);
  });
  
  router.post(
    '/api/webhook',
    notificationRequestValidation, // check what we need to validate in request 
    validationMiddleware, // validate the above request using middleware
    notificationController.sendNotification // revoke the function
  );

export default router;

