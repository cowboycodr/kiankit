import type { PageServerLoad } from './$types';

import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { MetaTagsProps } from 'svelte-meta-tags';

import { emailAuthSchema } from '@/schemas';

export const load: PageServerLoad = async ({ params }) => {
	const { method } = params;
	const methodString = method === 'login' ? 'Log in' : 'Sign up';

	const pageMetaTags: MetaTagsProps = {
		title: methodString
	};

	return {
		pageMetaTags,
		method,
		emailAuthForm: await superValidate(zod(emailAuthSchema))
	};
};
