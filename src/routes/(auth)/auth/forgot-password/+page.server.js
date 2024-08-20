import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { authSchema } from '$lib/schemas';
import { requestResetPassword } from '$lib/server/actions';

export const load = async (event) => {
	const pageMetaTags = Object.freeze({
		title: 'Forgot password'
	});

	return {
		pageMetaTags,
		form: await superValidate(zod(authSchema))
	};
};

export const actions = {
	default: requestResetPassword
};
