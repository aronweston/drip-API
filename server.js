import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { connectDB } from './config/db.js';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import roasterRoutes from './routes/roasterRoutes.js';
import { createUser } from './controllers/userController.js';

//Init & Config
const server = express();
dotenv.config();
connectDB();
server.use(cors());
server.use(express.json());

//server start
server.get('/', (req, res) => {
  res.send('server is running');
});

//Routes
server.use('/users/', userRoutes);
server.use('/roasters/', roasterRoutes);

//404 & Error Middleware
server.use(notFound);
server.use(errorHandler);

//Port & Listen
const PORT = process.env.PORT || 5001;
server.listen(PORT);
console.log(
  `Server is running ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold
);
