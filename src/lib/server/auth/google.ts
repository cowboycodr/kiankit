import { redirect, type ServerLoadEvent } from '@sveltejs/kit';
import type { SuperValidated } from 'sveltekit-superforms';
import type { AuthSchema } from '$lib/schemas';

export const signInWithGoogle = async (event: ServerLoadEvent, form: SuperValidated<AuthSchema>) => {
	const {
		url,
		locals: { supabase }
	} = event;

	const redirectUrl = form.data.redirectUrl;
	const redirectTo = `${url.origin}/auth/callback${redirectUrl ? `?r=${redirectUrl}` : ''}`;

	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			queryParams: {
				access_type: 'offline',
				prompt: 'consent'
			},
			redirectTo
		}
	});

	if (error) {
		return { error };
	}

	throw redirect(303, data.url);
};