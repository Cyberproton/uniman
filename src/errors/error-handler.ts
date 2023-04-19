import { Response } from 'express';

export const handleAsync = fn => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

export const errorHandler = (err, req, res: Response, next) => {
  console.error(err.stack);
  if (err.message) {
    res.status(500).json({ message: err.message });
    return;
  }
  res.status(500).json({ message: 'Internal Server Error' });
};
