import { redirect } from '@sveltejs/kit';

export const signInWithGithub = async (event, form) => {
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
		return { error };
	}

	throw redirect(303, data.url);
};
