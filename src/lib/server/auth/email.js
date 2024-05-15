import { redirect } from '@sveltejs/kit';

export const signUpWithEmail = async (event, form) => {
	const {
		url,
		locals: { supabase }
	} = event;

	const next = url.searchParams.get('next') || '/';

	const email = form.data.email;
	const password = form.data.password;

	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${url.origin}`
		}
	});

	if (error) {
		return { error };
	}

	throw redirect(303, '/auth/confirm?method=email');
};

export const signInWithEmail = async (event) => {};
