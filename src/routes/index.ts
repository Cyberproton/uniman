import express from 'express';
import { addViewGlobalData } from '../middlewares';
import apiRouter from './api-routes';
import viewRouter from './view-routes';

const router = express.Router();

router.use('/api', apiRouter);
router.use('/', addViewGlobalData, viewRouter);

export default router;
