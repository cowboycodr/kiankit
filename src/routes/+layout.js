import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createBrowserClient, isBrowser, parse } from '@supabase/ssr';

export const load = async (event) => {
	const { fetch, data, depends, url } = event;

	depends('supabase:auth');

	const supabase = createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		global: {
			fetch
		},
		cookies: {
			get(key) {
				if (!isBrowser()) {
					return JSON.stringify(data.session);
				}

				const cookie = parse(document.cookie);
				return cookie[key];
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

	const baseMetaTags = Object.freeze({
		title: 'KianKit',
		titleTemplate: '%s | KianKit',
		description: 'Rapidly build SvelteKit + Supabase apps.',
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			locale: 'en_US',
			title: 'KianKit',
			description: 'Rapidly build SvelteKit + Supabase apps.',
			siteName: 'KianKit',
			images: [
				{
					url: 'https://pub-0ad6faf4526b463d9367cf8b6e642b7c.r2.dev/kiankit-og.png',
					alt: 'KianKit',
					width: 1200,
					height: 630,
					type: 'image/png'
				}
			]
		},
		twitter: {
			handle: '@fromkian',
			site: '@fromkian',
			cardType: 'summary_large_image',
			title: 'KianKit',
			description: 'Rapidly build SvelteKit + Supabase apps.',
			image: 'https://pub-0ad6faf4526b463d9367cf8b6e642b7c.r2.dev/kiankit-og.png',
			imageAlt: 'Rapidly build SvelteKit + Supabase apps.'
		}
	});

	return { supabase, session, baseMetaTags };
};
