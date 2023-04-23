import { Router } from 'express';
import { validateAuth } from '../middlewares';

const viewRouter = Router();

viewRouter.get('/', (req, res) => {
  return res.render('home');
});

viewRouter.get('/login', (req, res) => {
  return res.render('login');
});

viewRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    return res.redirect('/login');
  });
});

export default viewRouter;
