import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const { parent } = event;
	const { session } = await parent();

	if (!session) {
		throw redirect(303, '/');
	}

	const pageMetaTags = Object.freeze({
		title: 'App'
	});

	return {
		pageMetaTags
	};
};
