import { Response } from 'express';
import statusCodes from '../config/statusCodes';

const getResponse = (
  res: Response,
  type: boolean,
  statusCode: string,
  data: object,
  message?: string
) => {
  return res.status(200).json({
    status_code: statusCode,
    error: type,
    message: message || statusCodes[statusCode],
    data,
  });
};

export default getResponse;
