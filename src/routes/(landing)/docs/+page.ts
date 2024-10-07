import type { MetaTagsProps } from 'svelte-meta-tags';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const pageMetaTags: MetaTagsProps = {
		title: 'Documentation'
	};

	return {
		pageMetaTags
	};
};
