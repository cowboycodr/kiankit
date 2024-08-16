<script>
	import * as Card from '$ui/card';
	import { Button } from '$ui/button';
	import { Separator } from '$ui/separator';

	import BookIcon from 'lucide-svelte/icons/book';
	import GithubIcon from 'lucide-svelte/icons/github';

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

<div class="container my-12 max-w-[1024px] space-y-12">
	<div class="space-y-3">
		<h1 class="text-3xl font-bold tracking-tighter md:text-4xl">
			SvelteKit + Supabase Starter Kit
		</h1>
		<p class="text-lg text-muted-foreground md:w-[50%]">
			KianKit is your go-to starter kit for rapid application development.
		</p>
		<div class="flex space-x-1 pt-1">
			<Button size="sm" href="/auth">Get started</Button>
			<Button
				variant="outline"
				size="sm"
				href="https://github.com/cowboycodr/kiankit"
				target="_blank">Star on GitHub</Button
			>
		</div>
	</div>
	<div class="space-y-6">
		<h1 class="text-2xl font-semibold tracking-tighter md:text-3xl">Features</h1>
		<div class="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<Card.Root>
					<Card.Header>
						<Card.Title>
							{feature.title}
						</Card.Title>
						<Card.Description>
							{feature.description}
						</Card.Description>
					</Card.Header>
				</Card.Root>
			{/each}
		</div>
	</div>
</div>
