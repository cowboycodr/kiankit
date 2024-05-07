import { json, fail } from '@sveltejs/kit';
import { signInWithGoogle } from '$lib/server/auth';

export const actions = {
	default: async (event) => {
		const { request } = event;

		const formData = await request.formData();
		const provider = formData.get('provider');

		if (provider === 'google') {
			const { error } = await signInWithGoogle(event);
		} else {
            fail(500, {
                message: "No OAuth provider provided."
            })
        }

		if (error) {
			fail(500, {
				message: error.message
			});
		}
	}
};
