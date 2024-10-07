import type { PageLoad } from './$types';
import type { Post } from '../../types';

import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params;

	const blogsResponse = await fetch('/data/posts/posts.json');
	const blogs: Post[] = await blogsResponse.json();

	const filteredBlogs = blogs.filter((b) => b.slug === slug);

	if (filteredBlogs.length === 0) {
		return error(404, { message: `Article '${slug}' not found` });
	}

	const blog = filteredBlogs[0];

	const contentResponse = await fetch(`/data/posts/${slug}.md`);
	const content = await contentResponse.text();

	return {
		blog,
		content
	};
};
