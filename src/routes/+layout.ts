import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { type MetaTagsProps } from 'svelte-meta-tags';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data, url, depends, fetch }) => {
	/**
	 * Declare a dependency so the layout can be invalidated, for example, on
	 * session refresh.
	 */
	depends('supabase:auth');

	const supabase = isBrowser()
		? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
				global: {
					fetch
				}
			})
		: createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
				global: {
					fetch
				},
				cookies: {
					getAll() {
						return data.cookies;
					}
				}
			});

	/**
	 * It's fine to use `getSession` here, because on the client, `getSession` is
	 * safe, and on the server, it reads `session` from the `LayoutData`, which
	 * safely checked the session using `safeGetSession`.
	 */
	const {
		data: { session }
	} = await supabase.auth.getSession();

	const {
		data: { user }
	} = await supabase.auth.getUser();

	const title = `KianKit`;
	const description = `SvelteKit + Supabase Starter Kit`;
	const canonicalUrl = new URL(url.pathname, url.origin).href;
	const OGImage = 'https://media.fromkian.com/acme.jpg';

	const baseMetaTags: MetaTagsProps = {
		title,
		titleTemplate: `%s — ${title}`,
		description,
		canonical: canonicalUrl,
		openGraph: {
			type: 'website',
			url: canonicalUrl,
			locale: 'en_US',
			title,
			description,
			siteName: title,
			images: [
				{
					url: OGImage,
					alt: title,
					width: 1200,
					height: 630,
					type: 'image/png'
				}
			]
		},
		twitter: {
			handle: `@example`,
			site: `@example`,
			cardType: 'summary_large_image',
			description,
			image: OGImage,
			imageAlt: description
		}
	};

	return { session, supabase, user, baseMetaTags };
};
