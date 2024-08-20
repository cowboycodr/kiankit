import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { authSchema } from '$lib/schemas';
import { updatePassword } from '$lib/server/actions';

export const load = async (event) => {
	const pageMetaTags = Object.freeze({
		title: 'Reset password'
	});

	return {
		pageMetaTags,
		form: await superValidate(zod(authSchema))
	};
};

export const actions = {
	default: updatePassword
};
