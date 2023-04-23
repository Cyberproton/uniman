import { Router } from 'express';
import { login, query } from '../controllers';
import { validateAuth } from '../middlewares';

const apiRouter = Router();

apiRouter.post('/login', login);

apiRouter.post('/query', validateAuth, query);

export default apiRouter;
