import { fail, redirect } from '@sveltejs/kit';

import { setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import {
	signInWithGithub,
	signInWithGoogle,
	signUpWithEmail,
	signInWithEmail
} from '$lib/server/auth';
import { authSchema } from '$lib/schemas';

export const signUp = async (event) => {
	const form = await superValidate(event, zod(authSchema));

	if (!form.valid) {
		return fail(400, {
			form
		});
	}

	const { method } = form.data;

	if (method === 'email') {
		const { error } = await signUpWithEmail(event, form);

		if (error) {
			console.error(error);
			return setError(form, 'email', error.message);
		}
	} else {
		const { error } = await handleOAuthProvider(method, event, form);

		if (error) {
			console.error(error);

			return fail(500, {
				form
			});
		}
	}

	return {
		form
	};
};

export const login = async (event) => {
	const form = await superValidate(event, zod(authSchema));

	if (!form.valid) {
		return fail(400, {
			form
		});
	}

	const { method } = form.data;

	if (method === 'email') {
		const { error } = await signInWithEmail(event, form);

		if (error) {
			if (error.mesage === 'Invalid login credentials') {
				return setError(form, 'password', error.message);
			}

			return setError(form, 'email', error.message);
		}
	} else {
		const { error } = await handleOAuthProvider(method, event, form);

		if (error) {
			console.error(error);

			return fail(500, {
				form
			});
		}
	}

	return {
		form
	};
};

export const logOut = async (event) => {
	const {
		locals: { supabase }
	} = event;

	await supabase.auth.signOut();

	throw redirect(303, '/');
};

export const resendConfirmation = async (event) => {
	const {
		url,
		locals: { supabase }
	} = event;

	const form = await superValidate(event, zod(authSchema));

	if (!form.valid) {
		return fail(400, {
			form
		});
	}

	const { email } = form.data;
	const redirectUrl = form.data.redirectUrl;

	const { data, error } = await supabase.auth.resend({
		type: 'signup',
		email,
		options: {
			emailRedirectTo: `${url.origin}${redirectUrl ? redirectUrl : '/'}`
		}
	});

	if (error) {
		return fail(500, {
			form
		});
	}

	throw redirect('/confirm?method=email');
};

async function handleOAuthProvider(method, event, form) {
	if (method === 'google') {
		const { error } = await signInWithGoogle(event, form);

		if (error) {
			return {
				error
			};
		}
	} else if (method === 'github') {
		const { error } = await signInWithGithub(event, form);

		if (error) {
			return {
				error
			};
		}
	} else {
		return {
			error: {
				message: 'Invalid OAuth provider.'
			}
		};
	}
}

export const requestResetPassword = async (event) => {
	const {
		url,
		locals: { supabase }
	} = event;

	const form = await superValidate(event, zod(authSchema));
	const { email } = form.data;

	if (!form.valid) {
		return fail(400, {
			form
		});
	}

	const { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: `${url.origin}/auth/reset-password`
	});

	if (error) {
		console.error(error);
		return setError(form, 'email', error.message);
	}

	throw redirect(303, '/auth/message?method=reset-request');
};

export const updatePassword = async (event) => {
	const {
		locals: { supabase }
	} = event;

	const form = await superValidate(event, zod(authSchema));
	const { password } = form.data;

	if (!form.valid) {
		return fail(400, {
			form
		});
	}

	const { error } = await supabase.auth.updateUser({ password });

	if (error) {
		console.error(error);
		return setError(form, 'password', error.message);
	}

	throw redirect(303, '/auth/message?method=reset-password');
};
