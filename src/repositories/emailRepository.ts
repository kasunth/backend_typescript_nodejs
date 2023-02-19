import Email from '../models/Email';
import { IEmailData } from '../interfaces/emailInterface';

const save = async (emailData: IEmailData) => {
  return await new Email(emailData).save();
};

const updateDeliveryStatusById = async (id: string, status: boolean) => {
  const data = {
    delivered: status
  }
  return await Email.findByIdAndUpdate(id, data);
}

export default {
  save,
  updateDeliveryStatusById
};


