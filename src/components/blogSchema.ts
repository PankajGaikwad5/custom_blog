import z from 'zod';

export const blogSchema = z.object({
  title: z.string().min(2, {
    message: 'Title should be atleast 2 words',
  }),
  desc: z.string().min(2, {
    message: 'desc should be atleast 2 words',
  }),
  blog: z.string().min(2, {
    message: 'blog should be atleast 2 words',
  }),
  tags: z.array(
    z.string().min(2, {
      message: 'Each tag must be at least 2 characters.',
    })
  ),
  // profile: z.string().min(2, {
  //   message: 'desc should be atleast 2 words',
  // }),
});
