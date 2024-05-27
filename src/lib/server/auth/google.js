import { redirect } from '@sveltejs/kit';

export const signInWithGoogle = async (event, form) => {
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
