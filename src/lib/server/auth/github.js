import { redirect } from '@sveltejs/kit';

export const signInWithGithub = async (event, form) => {
	const {
		url,
		locals: { supabase }
	} = event;

	const next = form.data.next;
	const redirectTo = `${url.origin}/auth/callback${next ? `?next=${next}` : ''}`;

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
