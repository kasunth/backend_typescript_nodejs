import { body, ValidationChain } from 'express-validator';

const validations: ValidationChain[] = [
  body('to')
    .exists()
    .withMessage('To field is required')
    .isEmail()
    .withMessage('Invalid email address'),
  body('subject').exists().withMessage('Subject field is required'),
  body('text').if(body('html').isEmpty()).notEmpty().withMessage('Text field or Html field is required'),
  body('html').if(body('text').isEmpty()).notEmpty().withMessage('Html field or Text field is required'),
];

export default validations;
