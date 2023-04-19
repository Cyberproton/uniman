import { getConnection } from './database';

export const login = (username: string, password: string) => {
  getConnection(username, password);
};

export const logout = () => {};
