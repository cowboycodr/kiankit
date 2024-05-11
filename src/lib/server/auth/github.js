import { redirect } from '@sveltejs/kit';

export const signInWithGithub = async (event) => {
	const {
		url,
		locals: { supabase }
	} = event;

	const next = url.searchParams.get('next') || '/';

	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'github',
		options: {
			redirectTo: `${url.origin}/auth/callback?next=${encodeURIComponent(next)}`
		}
	});

	if (error) {
		return { error };
	}

	throw redirect(303, data.url);
};
