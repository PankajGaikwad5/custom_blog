import mongoose from 'mongoose';

// export interface BlogDocument extends mongoose.Document {
//   title: string;
//   description: string;
//   blog: string;
//   profile: string;
//   // image: Buffer;
//   tags: string[];
// }

// const blogSchema = new mongoose.Schema<BlogDocument>(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     blog: {
//       type: String,
//       required: true,
//     },
//     profile: {
//       type: String,
//       required: true,
//     },
//     // image: {
//     //   type: Buffer,
//     //   required: true,
//     // },
//     tags: {
//       type: [String],
//     },
//   },
//   { timestamps: true }
// );

// // const BlogModel: Model<BlogDocument> =
// //   mongoose.models.User || mongoose.model<BlogDocument>('Blog', blogSchema);

// export default mongoose.models.Blog ||
//   mongoose.model<BlogDocument>('Blog', blogSchema);

export interface BlogDocument extends mongoose.Document {
  title: string;
  description: string;
  blog: string;
  image: string;
  profile: string;
  tags: string[];
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
    // file: {
    //   type: Buffer,
    //   required: false,
    // },
  },
  { timestamps: true }
);

export default mongoose.models.Blog ||
  mongoose.model<BlogDocument>('Blog', blogSchema);
