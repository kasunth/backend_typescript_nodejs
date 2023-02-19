import { Request, Response } from "express";
import emailService from "../../services/emailService";
import getResponse from "../../helpers/apiResponse";
import notificationController from "../../controllers/notificationController";

jest.mock("../../services/emailService", () => ({
  pushNotification: jest.fn(),
}));

jest.mock("../../helpers/apiResponse", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("notificationController sendNotification", () => {
  const req: Request = {
    body: {
      to: "example@example.com",
      subject: "Test",
      text: "This is a test",
      html: "<p>This is a test</p>",
    },
  } as Request;

  const res: Response = {
    status: jest.fn(() => res),
    json: jest.fn(),
  } as any;

  afterEach(() => {
    jest.resetAllMocks();
  });

    it("should call notificationService save Notification with request body", async () => {
      await notificationController.sendNotification(req, res);
      expect(emailService.pushNotification).toHaveBeenCalledWith(req.body);
    });

  it("should return a success response", async () => {
    await notificationController.sendNotification(req, res);
    expect(getResponse).toHaveBeenCalledWith(res, false, '200', {});
  });
});
