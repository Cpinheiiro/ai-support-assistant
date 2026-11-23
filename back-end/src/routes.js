import { Router } from "express";
import { messagem } from './app/controllers/messageController.js'
import { messageReturn } from './app/controllers/messageReturnController.js'

const routes = new Router();

routes.get('/', messagem)

routes.post('/message', messageReturn)



export default routes

