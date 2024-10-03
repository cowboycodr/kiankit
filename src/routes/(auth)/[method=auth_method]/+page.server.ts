import type { PageServerLoad } from './$types';

import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { emailAuthSchema } from '@/schemas';

export const load: PageServerLoad = async ({ params }) => {
	const { method } = params;

	return {
		method,
		emailAuthForm: await superValidate(zod(emailAuthSchema))
	};
};
