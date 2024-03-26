import mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document {
  username: string;
  password: string;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    username: {
      type: String,
      required: true,
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
