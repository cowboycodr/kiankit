<script>
	import { Link, Github } from 'lucide-svelte';

	import { Button } from '$ui/button';
	import * as Card from '$ui/card';

	const features = [
		{
			title: 'Svelte',
			description: 'Component-based JavaScript framework, that prioritizes speed and simplicity.',
			href: 'https://svelte.dev'
		},
		{
			title: 'SvelteKit',
			description: 'An app framework built on top of Svelte. Routing, SSR, and more.',
			href: 'https://kit.svelte.dev'
		},
		{
			title: 'Supabase',
			description:
				'An open-source firebase alternative with a generous free tier, and self-hosting options.',
			href: 'https://supabase.com'
		},
		{
			title: 'Tailwind CSS',
			description:
				'Utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.',
			href: 'https://tailwindcss.com'
		},
		{
			title: 'shadcn/ui',
			description:
				'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open source.',
			href: 'https://ui.shadcn.com'
		},
		{
			title: 'Lucide',
			description: 'Open-source library that provides 1000s of beautiful & consistent icons.',
			href: 'https://lucide.dev'
		}
	];
</script>

<div class="container h-[200vh]"></div>
