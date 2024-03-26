import mongoose from 'mongoose';

export interface BlogDocument extends mongoose.Document {
  title: string;
  // description: string;
  // image: Buffer;
  // tags: string[];
}

const blogSchema = new mongoose.Schema<BlogDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    // description: {
    //   type: String,
    //   required: true,
    // },
    // image: {
    //   type: Buffer,
    //   required: true,
    // },
    // tags: {
    //   type: [String],
    // },
  },
  { timestamps: true }
);

// const BlogModel: Model<BlogDocument> =
//   mongoose.models.User || mongoose.model<BlogDocument>('Blog', blogSchema);

export default mongoose.models.Blog ||
  mongoose.model<BlogDocument>('Blog', blogSchema);
