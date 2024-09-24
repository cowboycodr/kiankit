import { superValidate } from 'sveltekit-superforms';
import { authSchema } from '$lib/schemas';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async (event) => {
	const pageMetaTags = Object.freeze({
		title: 'Log in'
	});

	return {
		pageMetaTags,
		form: await superValidate(zod(authSchema))
	};
};
