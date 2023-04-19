import { Router } from 'express';
import { login } from '../controllers';

const apiRouter = Router();

apiRouter.post('/login', login);

export default apiRouter;
