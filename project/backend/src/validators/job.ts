import { z } from 'zod';

const jobSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  location: z.string().min(2, 'Location must be at least 2 characters'),
  type: z.enum(['full-time', 'part-time', 'contract', 'internship'], {
    errorMap: () => ({ message: 'Invalid job type' }),
  }),
  salary: z.string().optional(),
  requirements: z.array(z.string()).min(1, 'At least one requirement is needed'),
});

export const validateJobCreation = (data: unknown) => {
  return jobSchema.parse(data);
};