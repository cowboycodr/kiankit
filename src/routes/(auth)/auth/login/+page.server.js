import { superValidate } from 'sveltekit-superforms';
import { authSchema } from '$lib/schemas';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async (event) => {
	return {
		form: await superValidate(zod(authSchema))
	};
};
