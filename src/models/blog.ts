import mongoose, { Schema, Document, Model, models } from 'mongoose';
import { connectMongoDB } from '@/lib/mongodb';

export interface UserDocument extends Document {
  title: string;
  blog: string;
  image: ImageData;
}

const userSchema = new Schema<UserDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    blog: {
      type: String,
      required: true,
    },
    image: {
      type: Image,
      required: true,
    },
  },
  { timestamps: true }
);

const BlogModel: Model<UserDocument> =
  mongoose.models.User || mongoose.model<UserDocument>('Blog', userSchema);

export default BlogModel;
