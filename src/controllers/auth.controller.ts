import { Response } from 'express';
import { handleAsync } from '../errors';
import { getConnection } from '../services';
import { AppRequest } from '../types';

export const login = handleAsync(async (req: AppRequest, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' });
  }
  const conn = await getConnection(username, password);
  conn.close();
  req.session.username = username;
  req.session.password = password;
  return res.json({ message: 'Logged in successfully' });
});

export const logout = handleAsync(async (req: AppRequest, res: Response) => {
  const username = req.session.username;
  await req.session.destroy(() => {
    console.log('Destroyed session of user: ' + username);
  });
  res.redirect('/login');
});
