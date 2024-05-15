import { fail, redirect } from '@sveltejs/kit';
import { signInWithGithub, signInWithGoogle, signUpWithEmail } from '$lib/server/auth';
import { superValidate } from 'sveltekit-superforms';
import { schema as authSchema } from '$lib/auth';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async (event) => {
	return {
		form: await superValidate(zod(authSchema))
	};
};

export const actions = {
	signin: async (event) => {
		const form = await superValidate(event, zod(authSchema));

		if (!form.valid) {
			return fail(400, {
				form
			})
		}

		const { method } = form.data;

		// Handle different providers
		if (method === 'email') {
			const { error } = await signUpWithEmail(event, form);

			if (error) {
				console.error(error);

				return fail(500, {
					message: error.message
				});
			}
		} else if (method === 'google') {
			const { error } = await signInWithGoogle(event);

			if (error) {
				console.error(error);

				return fail(500, {
					message: error.message
				});
			}
		} else if (method === 'github') {
			const { error } = await signInWithGithub(event);

			if (error) {
				console.error(error);

				return fail(500, {
					message: error.message
				});
			}
		} else {
			console.error("Invalid method.")

			return fail(400, {
				form,
				message: 'Invalid method.'
			});
		}

		return {
			form,
		}
	},
	signout: async (event) => {
		const {
			locals: { supabase }
		} = event;

		await supabase.auth.signOut();

		throw redirect(303, '/');
	}
};
