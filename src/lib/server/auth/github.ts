import { redirect, type ServerLoadEvent } from '@sveltejs/kit';
import type { SuperValidated } from 'sveltekit-superforms';
import type { AuthSchema } from '$lib/schemas';
import type { AuthResult } from './email';

export const signInWithGithub = async (
  event: ServerLoadEvent,
  form: SuperValidated<AuthSchema>
): Promise<AuthResult> => {
	const {
		url,
		locals: { supabase }
	} = event;

	const redirectUrl = form.data.redirectUrl;
	const redirectTo = `${url.origin}/auth/callback${redirectUrl ? `?r=${redirectUrl}` : ''}`;

	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'github',
		options: {
			redirectTo
		}
	});
	if (error) {
		return { error: { target: 'email', message: error.message } };
	}

	if (!data.url) {
		return { error: { target: 'email', message: 'Failed to get OAuth URL' } };
	}

	throw redirect(303, data.url);
};
