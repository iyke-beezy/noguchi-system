import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import homeRouter from './routes/index'
import usersRouter from './routes/users'

import './db/mongoose';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', homeRouter);
app.use('/users', usersRouter);

export default app
