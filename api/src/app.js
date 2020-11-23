import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import homeRouter from './routes/index'
import usersRouter from './routes/users'
import authRouter from './routes/auth.route'
import { config } from 'dotenv';
import cors from 'cors'

config ();

var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter)

export default app
