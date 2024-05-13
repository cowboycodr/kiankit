import { fail, redirect } from '@sveltejs/kit';
import { signInWithGithub, signInWithGoogle } from '$lib/server/auth';

export const actions = {
	signin: async (event) => {
		const { request } = event;

		const formData = await request.formData();
		const provider = formData.get('provider');

		if (provider === 'google') {
			const { error } = await signInWithGoogle(event);

			if (error) {
				fail(500, {
					message: error.message
				});
			}
		} else if (provider === 'github') {
			const { error } = await signInWithGithub(event);

			if (error) {
				fail(500, {
					message: error.message
				});
			}
		} else {
			fail(500, {
				message: 'No OAuth provider provided.'
			});
		}

		if (error) {
			fail(500, {
				message: error.message
			});
		}
	},
	signout: async (event) => {
		const {
			locals: { supabase }
		} = event;

		console.log('sign out');

		await supabase.auth.signOut();

		throw redirect(303, '/');
	}
};
