import mongoose from 'mongoose';

export interface BlogDocument extends mongoose.Document {
  title: string;
  description: string;
  blog: string;
  image: string;
  profile: string;
  tags: string[];
  comments: Comment[];
  file: Buffer;
}

const blogSchema = new mongoose.Schema<BlogDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    blog: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    profile: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
    // comments: {
    //   type: [{ String }],
    // },
    comments: {
      type: [{ profile: String, comment: String }],
    },
    // comments: [
    //   {
    //     profile: {
    //       type: String,
    //     },
    //     comment: {
    //       type: String,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

export default mongoose.models.Blog ||
  mongoose.model<BlogDocument>('Blog', blogSchema);
