import { z } from 'zod';

export const emailAuthSchema = z.object({
	email: z.string().email().max(128)
});

export type EmailAuthSchema = z.infer<typeof emailAuthSchema>;
