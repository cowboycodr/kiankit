import { redirect } from '@sveltejs/kit';
import { signUp, login, logOut, resendConfirmation } from '$lib/server/actions';

export const load = async (event) => {
	throw redirect(303, '/login');
};

export const actions = {
	login,
	signUp,
	logOut,
	resendConfirmation
};
