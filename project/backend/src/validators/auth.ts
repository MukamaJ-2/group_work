import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  role: z.enum(['employer', 'jobseeker'], {
    errorMap: () => ({ message: 'Role must be either employer or jobseeker' }),
  }),
});

const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

export const validateRegistration = (data: unknown) => {
  return userSchema.parse(data);
};

export const validateLogin = (data: unknown) => {
  return loginSchema.parse(data);
};