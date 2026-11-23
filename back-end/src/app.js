import express from 'express';
import cors from 'cors'
import routes from './routes.js'
import { errorHandler } from './app/middlewares/errorHandler.js';

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use(routes);

app.use(errorHandler);

export default app