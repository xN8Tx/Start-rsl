/* eslint-disable no-console */
import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { join } from 'path'; // УДАЛИТЬ ПОТОМ ТАК КАК ЭТО ДЛЯ HTML 
import __dirname from './dirname.js';

import usersRouter from './routes/user-routes.js';
import authRouter from './routes/auth-routes.js';
import coursesRouter from './routes/courses-routes.js';
import commentsRouter from './routes/comments-routes.js';
import todoRouter from './routes/todo-routes.js';
import fileRouter from './routes/file-routes.js';
import videoRouter from './routes/video-routes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const corsConfig = {credentials: true, origin: process.env.CORS || 'http://localhost:3000'};

app.use(json());
app.use(cookieParser());
app.use(cors(corsConfig));

app.use('/api/images', express.static(join(__dirname, 'assets/images')));

app.use('/api/images', express.static(join(__dirname, 'assets/images'))); 
app.use('/api/videos', express.static(join(__dirname, 'assets/videos'))); 

app.use('/api/auth', authRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/users', usersRouter); 
app.use('/api/comments', commentsRouter); 
app.use('/api/todo', todoRouter);
app.use('/api/upload', fileRouter);
app.use('/api/video', videoRouter);


const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();