import express from 'express';
import getAllClientsController from '../controllers/clients/getAllClientsController.js';
import getOneClientController from '../controllers/clients/getOneClientController.js';

const clientsRouter = express.Router();

clientsRouter.get('/', getAllClientsController);
clientsRouter.get('/:id', getOneClientController);

export default clientsRouter;
