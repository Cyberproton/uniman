import { NextFunction, Response } from 'express';
import { AppRequest } from '../types';

export const addViewGlobalData = (
  req: AppRequest,
  res: Response,
  next: NextFunction,
) => {
  res.locals.username = req.session.username;
  return next();
};
