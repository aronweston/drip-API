import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(`Mongo Connected ${connection.connection.host}`.green);
  } catch (error) {
    console.error(`Error: ${error}`.red.bold);
  }
};

export default connectDB;
