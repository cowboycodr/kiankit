import type { Actions } from './$types';
import { redirect, fail } from '@sveltejs/kit';

import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { emailAuthSchema } from '@/schemas';

export const load = async () => {
	return redirect(303, '/login');
};

export const actions: Actions = {
	async email(event) {
		const {
			locals: { supabase },
			url
		} = event;

		const form = await superValidate(event, zod(emailAuthSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { email } = form.data;

		const { error } = await supabase.auth.signInWithOtp({
			email,
			options: {
				shouldCreateUser: true,
				emailRedirectTo: `${url.origin}/app`
			}
		});

		if (error) {
			return redirect(303, '/auth/error');
		}

		return redirect(303, '/auth/verify');
	},
	async oauth() {
		// TODO
	}
};
