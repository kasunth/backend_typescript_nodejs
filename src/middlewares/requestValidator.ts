import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import _ from "lodash";
import getResponse from "../helpers/apiResponse";

const validater = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorsMapped = errors.array({ onlyFirstError: true });

    const errorsFormatted = _(errorsMapped)
      .groupBy("param")
      .mapValues((group) => _.map(group, "msg"))
      .value();
    return getResponse(res, false, "400", errorsFormatted);
  }
  return next();
};

export default validater;
