import type { PageLoad } from './$types';
import type { Post } from './types';

import type { MetaTagsProps } from 'svelte-meta-tags';
import moment from 'moment';

export const load: PageLoad = async ({ fetch }) => {
	const pageMetaTags: MetaTagsProps = {
		title: 'KianKit',
		titleTemplate: ''
	};

	const postsResponse = await fetch('data/posts/posts.json');
	let posts: Post[] = await postsResponse.json();

	posts = posts.sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf());

	return {
		pageMetaTags,
		posts
	};
};
