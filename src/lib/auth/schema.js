import { z } from 'zod';

export const schema = z.object({
	email: z.string().email().optional(),
	password: z.string().min(9).optional(),
	method: z.enum(['email', 'github', 'google']),
	redirectUrl: z.string().optional()
});
