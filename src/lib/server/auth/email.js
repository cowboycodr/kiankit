import { redirect } from '@sveltejs/kit';

export const signUpWithEmail = async (event, form) => {
	const {
		url,
		locals: { supabase }
	} = event;

	const email = form.data.email;
	const password = form.data.password;
	const next = form.data.next;

	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${url.origin}${next ? next : '/'}`
		}
	});

	if (error) {
		return { error };
	}

	throw redirect(303, '/auth/confirm?method=email');
};

export const signInWithEmail = async (event, form) => {
	const {
		url,
		locals: { supabase }
	} = event;

	const email = form.data.email;
	const password = form.data.password;
	const next = form.data.next;

	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	});

	if (error) {
		return { error };
	}

	throw redirect(303, next);
};
