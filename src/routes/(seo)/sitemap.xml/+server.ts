import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import type { Post } from '../../(landing)/types';

export const GET: RequestHandler = async ({ url, fetch }) => {
	const postsResponse = await fetch('/data/posts/posts.json');
	const posts: Post[] = await postsResponse.json();
	const postSlugs = posts.map((a) => a.slug);

	return await sitemap.response({
		origin: url.origin,
		excludeRoutePatterns: ['.*\\(app\\).*'],
		paramValues: {
			'/[method=auth_method]': ['login', 'signup'],
			'/article/[slug]': postSlugs
		}
	});
};
