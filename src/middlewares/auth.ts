import { Response } from 'express';
import { AppRequest } from '../types';

export const validateAuth = (req: AppRequest, res: Response, next) => {
  console.log(req.session);
  if (req.session.username && req.session.password) {
    return next();
  }
  return res.redirect('/login');
};
