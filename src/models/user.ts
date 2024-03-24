// import mongoose, { Schema, models } from 'mongoose';

// const userSchema = new Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const User = models.user || mongoose.model('User', userSchema);
// export default User;
// models/user.ts
import mongoose, { Schema, Document, Model, models } from 'mongoose';
import { connectMongoDB } from '@/lib/mongodb';

export interface UserDocument extends Document {
  username: string;
  password: string;
}

const userSchema = new Schema<UserDocument>(
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

const UserModel: Model<UserDocument> =
  mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
