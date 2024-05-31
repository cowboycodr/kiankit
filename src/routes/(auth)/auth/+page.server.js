import { fail, redirect } from '@sveltejs/kit';
import {
	signInWithGithub,
	signInWithGoogle,
	signUpWithEmail,
	signInWithEmail
} from '$lib/server/auth';
import { setError, superValidate } from 'sveltekit-superforms';
import { authSchema } from '$lib/schemas';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async (event) => {
	throw redirect(303, '/auth/login');
};

export const actions = {
	signup: async (event) => {
		const form = await superValidate(event, zod(authSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { method } = form.data;

		// Handle different providers
		if (method === 'email') {
			const { error } = await signUpWithEmail(event, form);

			if (error) {
				console.error(error);
				return setError(form, 'email', error.message);
			}
		} else {
			const { error } = await handleOAuthProvider(method, event, form);

			if (error) {
				console.error(error);

				return fail(500, {
					form
				});
			}
		}

		return {
			form
		};
	},
	login: async (event) => {
		const form = await superValidate(event, zod(authSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { method } = form.data;

		if (method === 'email') {
			const { error } = await signInWithEmail(event, form);

			if (error) {
				if (error.message === 'Invalid login credentials') {
					return setError(form, 'password', error.message);
				}

				return setError(form, 'email', error.message);
			}
		} else {
			const { error } = await handleOAuthProvider(method, event, form);

			if (error) {
				console.error(error);

				return fail(500, {
					form
				});
			}
		}

		return {
			form
		};
	},
	signout: async (event) => {
		const {
			locals: { supabase }
		} = event;

		await supabase.auth.signOut();

		throw redirect(303, '/');
	},
	'resend-confirmation': async (event) => {
		const {
			url,
			locals: { supabase }
		} = event;

		const form = await superValidate(event, zod(authSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { email, password } = form.data;
		const redirectUrl = form.data.redirectUrl;

		const { data, error } = await supabase.auth.resend({
			type: 'signup',
			email,
			options: {
				emailRedirectTo: `${url.origin}${redirectUrl ? redirectUrl : '/'}`
			}
		});

		if (error) {
			return fail(500, {
				form
			});
		}

		throw redirect(303, '/confirm?method=email');
	}
};

async function handleOAuthProvider(method, event, form) {
	if (method === 'google') {
		const { error } = await signInWithGoogle(event, form);

		if (error) {
			return {
				error
			};
		}
	} else if (method === 'github') {
		const { error } = await signInWithGithub(event, form);

		if (error) {
			return {
				error
			};
		}
	} else {
		return {
			error: {
				message: 'Invalid OAuth provider.'
			}
		};
	}
}
