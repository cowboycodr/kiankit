import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const { parent } = event;

	const { session, user } = await parent();

	if (!session) {
		throw redirect(303, '/');
	}
};
