import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	interface Post {
		slug: string;
		title: string;
		date: string;
		description: string;
	}

	const postsResponse = await fetch('/data/posts/posts.json');
	const posts: Post[] = await postsResponse.json();

	return {
		posts
	};
};
