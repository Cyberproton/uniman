import { NextFunction, Response } from 'express';
import { AppRequest } from '../types';

export const validateAuth = (
  req: AppRequest,
  res: Response,
  next: NextFunction,
) => {
  const username = req.headers['username'] as string | undefined;
  const password = req.headers['password'] as string | undefined;
  console.log(`User ${username} is calling API`);
  if (username == null || password == null) {
    res.status(400).json('You must log in to perform this action');
    return;
  }
  req.username = username;
  req.password = password;
  next();
};
