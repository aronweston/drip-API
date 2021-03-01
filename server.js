import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

const server = express();
dotenv.config();

//server start
server.get('/', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT || 5001;
server.listen(
  PORT,
  console.log(
    `Server is running ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold
  )
);
