import { superValidate } from 'sveltekit-superforms';
import { schema as authSchema } from '$lib/auth';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async (event) => {
	return {
		form: await superValidate(zod(authSchema))
	};
};