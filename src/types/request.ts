import { Request } from 'express';
import { Session, SessionData } from 'express-session';

export interface AppRequest extends Request {
  session: Session &
    Partial<SessionData> & { username?: string; password?: string };
  username?: string;
  password?: string;
}
