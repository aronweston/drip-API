import mongoose from 'mongoose';
import dotenv from 'dotenv';

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`Mongo Connected ${connection.connection.host}`.green);
  } catch (error) {
    console.error(`Error: ${error}`.red.bold);
  }
};

export default connectDB;
