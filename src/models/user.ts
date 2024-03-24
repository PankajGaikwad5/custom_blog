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

// const UserModel: Model<UserDocument> =
//   mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);
// connectMongoDB().then(() => {
//   const UserModel: Model<UserDocument> =
//     mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);

//   // Now you can use UserModel for database operations
// });

// Define UserModel as a variable outside of the connectMongoDB function
let UserModel: Model<UserDocument>;

// Call connectMongoDB to establish the database connection and define UserModel
connectMongoDB()
  .then(() => {
    UserModel =
      mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if connection fails
  });

export default UserModel;
