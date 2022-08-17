import { NextFunction, Request, Response } from "express";
import * as services from "./messages.service";

export async function sendMessageController(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    let requestText: string = "";
    if (typeof request.query.text === "string")
      requestText = request.query.text;

    const result = await services.sendMessage(requestText);
    return response.send(result);
  } catch (error) {
    next(error);
  }
}
