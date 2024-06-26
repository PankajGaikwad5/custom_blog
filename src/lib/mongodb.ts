import * as mongoose from 'mongoose';

export const connectMongoDB = async () => {
  console.log(process.env.MONGODB_URI);
  try {
    await mongoose.connect(process.env.MONGODB_URI ?? '');
    console.log('connected to mongodb');
  } catch (error) {
    console.log("couldn't connect");
    console.log(error);
  }
};
