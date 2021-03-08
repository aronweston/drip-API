import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
// import { printRoutes } from 'express-list-endpoints';
import { connectDB } from './config/db.js';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import roasterRoutes from './routes/roasterRoutes.js';
import coffeeRoutes from './routes/coffeeRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

//Init & Config
const server = express();
dotenv.config();
connectDB();
server.use(cors());
server.use(express.json());

if (process.env.NODE_ENV === 'development') {
  server.use(morgan('dev'));
}

//server start
server.get('/', (req, res) => {
  res.send('server is running');
});

//Routes
server.use('/users/', userRoutes);
server.use('/roasters/', roasterRoutes);
server.use('/coffee/', coffeeRoutes);
server.use('/order/', orderRoutes);

//404 & Error Middleware
server.use(notFound);
server.use(errorHandler);

const PORT = process.env.PORT || 5000;

server.listen(PORT, function () {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});

// //Port & Listen
// server.listen(PORT);
// console.log(
//   `Server is running ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold
// );
