import { fail, redirect, type ServerLoadEvent } from '@sveltejs/kit';

import { setError, superValidate, type SuperValidated } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import {
	signInWithGithub,
	signInWithGoogle,
	signUpWithEmail,
	signInWithEmail
} from '$lib/server/auth';
import { authSchema, type AuthSchema } from '$lib/schemas';

type AuthResult = {
	error?: {
		target: 'email' | 'password';
		message: string;
	};
};

export const signUp = async (event: ServerLoadEvent) => {
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

export const login = async (event: ServerLoadEvent) => {
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
			return setError(form, error.target, error.message);
		}
		// If no error, signInWithEmail will throw a redirect
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

export const logOut = async (event: ServerLoadEvent) => {
	const {
		locals: { supabase }
	} = event;

	await supabase.auth.signOut();

	throw redirect(303, '/');
};

export const resendConfirmation = async (event: ServerLoadEvent) => {
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

	if (!email) {
		return setError(form, 'email', 'Email is required');
	}

	const { error } = await supabase.auth.resend({
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

	throw redirect(303, '/auth/message?message=email');
};

async function handleOAuthProvider(
	method: 'google' | 'github',
	event: ServerLoadEvent,
	form: SuperValidated<AuthSchema>
): Promise<AuthResult> {
	const handlers = {
		google: signInWithGoogle,
		github: signInWithGithub
	};

	const handler = handlers[method];
	if (!handler) {
		return { error: { target: 'email', message: 'Invalid OAuth provider.' } };
	}

	const { error } = await handler(event, form);
	return error ? { error: { target: 'email', message: error.message } } : {};
}

export const requestResetPassword = async (event: ServerLoadEvent) => {
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

	if (!email) {
		return setError(form, 'email', 'Email is required');
	}

	const { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: `${url.origin}/auth/reset-password`
	});

	if (error) {
		console.error(error);
		return setError(form, 'email', error.message);
	}

	throw redirect(303, '/auth/message?message=reset-request');
};

export const updatePassword = async (event: ServerLoadEvent) => {
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

	throw redirect(303, '/auth/message?message=reset-password');
};
