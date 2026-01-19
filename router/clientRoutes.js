import express from 'express';
import { createClient, getClients } from '../controllers/clientController.js';

const clientRoutes = express.Router();

clientRoutes.get('/', getClients)
clientRoutes.post('/', createClient)

export default clientRoutes;