import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

const validadeUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.id !== undefined) {
    throw new AppError("Unauthorized", 401);
  }

  return next();
};

export default validadeUpdateMiddleware;
