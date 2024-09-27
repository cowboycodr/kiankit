import { z } from 'zod';

export const authSchema = z.object({
	email: z.string().email().optional(),
	password: z.string().min(9).optional(),
	method: z.enum(['email', 'github', 'google']),
	redirectUrl: z.string().optional()
});

export type AuthSchema = z.infer<typeof authSchema>;
