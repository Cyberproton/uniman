import { Response } from 'express';
import { handleAsync } from '../errors';
import { getConnection } from '../services';
import { AppRequest } from '../types';
import { Connection } from 'oracledb';

export const login = handleAsync(async (req: AppRequest, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' });
  }
  let conn: Connection;
  try {
    conn = await getConnection(username, password);
  } catch (err) {
    return res.status(400).json({ message: 'Wrong username or password' });
  } finally {
    await conn.close();
  }
  console.log(`User logged in with username ${username}, password ${password}`);
  return res.json({ message: 'Logged in successfully' });
});

export const logout = handleAsync(async (req: AppRequest, res: Response) => {
  const username = req.session.username;
  await req.session.destroy(() => {
    console.log('Destroyed session of user: ' + username);
  });
  res.redirect('/login');
});
