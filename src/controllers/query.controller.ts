import { NextFunction, Response } from 'express';
import { AppRequest } from '../types';
import { handleAsync } from '../errors';
import { getConnection } from '../services';

export const query = handleAsync(
  async (req: AppRequest, res: Response, next: NextFunction) => {
    const query = req.body.query;
    console.log(`User ${req.username} is executing ${query}`);
    const conn = await getConnection(req.username!, req.password!);
    const result = await conn.execute(query);
    conn.close();
    res.json(result);
  },
);
