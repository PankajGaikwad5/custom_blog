import z from 'zod';
export const loginSchema = z.object({
  email: z.string().email({
    message: 'Invalid email format. Please use a valid email address.',
  }),
  password: z.string().min(2, {
    message: 'Password must be at least 2 characters.',
  }),
});
export const registerSchema = z.object({
  email: z.string().email({
    message: 'Invalid email format. Please use a valid email address.',
  }),
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Password must be at least 2 characters.',
  }),
});
// export default loginSchema;
