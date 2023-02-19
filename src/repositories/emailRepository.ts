import Email from '../models/Email';
import { IEmailData } from '../interfaces/emailInterface';

const save = async (emailData: IEmailData) => {
  return await new Email(emailData).save();
};

export default {
  save,
};
