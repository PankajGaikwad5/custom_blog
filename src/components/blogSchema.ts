import z from 'zod';

export const blogSchema = z.object({
  title: z.string().min(2, {
    message: 'Title should be atleast 2 words',
  }),
  description: z.string().min(2, {
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
  image: z.string().refine(
    (value) => {
      if (!value) return false; // If no image provided, return false
      // Check if the image size is less than 5MB (adjust size as needed)
      return value.length < 5 * 1024 * 1024; // 5MB in bytes
    },
    {
      message: 'Image size should be less than 5MB',
    }
  ),
});
