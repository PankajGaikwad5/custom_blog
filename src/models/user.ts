import mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document {
  email: string;
  username: string;
  password: string;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// const UserModel: mongoose.Model<UserDocument> =

export default mongoose.models.User ||
  mongoose.model<UserDocument>('User', userSchema);
