import express, { Router } from 'express';
import get from './controllers/api';

// API Controller
const apiRouter: Router = Router();
apiRouter.get('/:service', get);

export const setupRoutesFor = (app: express.Application) => {
  app.use('/api', apiRouter);
};
