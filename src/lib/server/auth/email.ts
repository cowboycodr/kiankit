import { redirect, type ServerLoadEvent } from '@sveltejs/kit';
import type { SuperValidated } from 'sveltekit-superforms';
import type { AuthSchema } from '$lib/schemas';

export type AuthResult = {
	error?: {
		target: 'email' | 'password';
		message: string;
	};
};

export const signUpWithEmail = async (
	event: ServerLoadEvent,
	form: SuperValidated<AuthSchema>
): Promise<AuthResult> => {
	const {
		url,
		locals: { supabase }
	} = event;

	const email = form.data.email;
	const password = form.data.password;
	const redirectUrl = form.data.redirectUrl;

	if (!email) {
		return {
			error: {
				target: 'email',
				message: 'Email is required'
			}
		};
	}

	if (!password) {
		return {
			error: {
				target: 'password',
				message: 'Password is required'
			}
		};
	}

	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${url.origin}${redirectUrl ? redirectUrl : '/'}`
		}
	});

	if (error) {
		return {
			error: {
				target: 'email',
				message: error.message
			}
		};
	}

	throw redirect(303, '/auth/message?message=email');
};

export const signInWithEmail = async (
	event: ServerLoadEvent,
	form: SuperValidated<AuthSchema>
): Promise<AuthResult> => {
	const {
		url,
		locals: { supabase }
	} = event;

	const email = form.data.email;
	const password = form.data.password;
	const redirectUrl = form.data.redirectUrl;

	if (!email) {
		return { error: { target: 'email', message: 'Email is required' } };
	}

	if (!password) {
		return { error: { target: 'password', message: 'Password is required' } };
	}

	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	});

	if (error) {
		if (error.message === 'Invalid login credentials') {
			return { error: { target: 'password', message: 'Invalid email or password' } };
		}
		return { error: { target: 'email', message: error.message } };
	}

	throw redirect(303, redirectUrl ? redirectUrl : '/');
};
