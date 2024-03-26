import z from 'zod';
const addBlogSchema = z.object({
  title: z.string().min(2, {
    message: 'title must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'description must be at least 2 characters.',
  }),
  tags: z.string().min(2, {
    message: 'tags must be at least 2 characters.',
  }),
});
export default addBlogSchema;
