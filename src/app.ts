import express, { Application } from 'express';
import dotenv from 'dotenv';

/** Load config */
dotenv.config();
import config from './config/config';
import  connectDB = require('./config/database');

/** Database connection */
connectDB();

const app: Application = express();

/** Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Routes */
app.use('/', require('./app/routes/index'));
app.use('/api/lists', require('./app/routes/lists'));

/** Create the server */
app.listen(
    config.server.port, 
    () => console.log(`App running at http://${config.server.hostname}:${config.server.port}`)
);