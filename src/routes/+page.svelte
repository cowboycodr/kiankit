<script>
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	import Navbar from './navbar.svelte';
	import { Button } from '$ui/button';
	import * as Card from '$ui/card';

	const features = [
		{
			title: 'Svelte',
			description: 'Component-based JavaScript framework, that prioritizes speed and simplicity.'
		},
		{
			title: 'SvelteKit',
			description: 'An app framework built on top of Svelte. Routing, SSR, and more.'
		},
		{
			title: 'Supabase',
			description:
				'An open-source firebase alternative with a generous free tier, and self-hosting options.'
		},
		{
			title: 'Tailwind CSS',
			description:
				'Utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.'
		},
		{
			title: 'shadcn/ui',
			description:
				'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open source.'
		},
		{
			title: 'Lucide',
			description: 'Open-source library that provides 1000s of beautiful & consistent icons.'
		}
	];
</script>

<svelte:head>
	<title>KianKit</title>
</svelte:head>

<Navbar />

<div class="container">
	<section
		class="flex flex-col items-center space-y-2 py-8 pb-8 text-center md:py-12 md:pb-8 lg:py-24 lg:pb-20"
	>
		<h1 class="text-balance text-3xl font-semibold tracking-tighter md:text-6xl lg:leading-[1.1]">
			Build apps without re-inventing the wheel
		</h1>
		<p class="max-w-[750px] text-balance text-lg text-muted-foreground sm:text-xl">
			Accelerate your development with KianKit's pre-configured setup for SvelteKit and Supabase.
		</p>
		<div class="flex space-x-3 py-4">
			<Button href="/auth/signup">Get Started</Button>
			<Button href="https://github.com/cowboycodr/KianKit" class="flex space-x-2" variant="outline">
				<span>
					<Fa icon={faGithub} />
				</span>
				<span> GitHub </span>
			</Button>
		</div>
	</section>
	<section class="flex flex-col items-center space-y-2 pb-8 lg:pb-20">
		<h2
			class="text-center text-2xl font-semibold leading-[1.1] tracking-tighter sm:text-3xl md:text-5xl"
		>
			Features
		</h2>
		<p class="text-balanace max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
			KianKit utilizes a variety of popular frontend & backend libraries.
		</p>
		<div
			class="grid w-full max-w-[64rem] grid-cols-1 grid-rows-2 gap-2 py-4 md:grid-cols-3 md:gap-3 lg:gap-4"
		>
			{#each features as card}
				<Card.Root>
					<Card.Header>
						<Card.Title>{card.title}</Card.Title>
						<Card.Description>
							{card.description}
						</Card.Description>
					</Card.Header>
				</Card.Root>
			{/each}
		</div>
	</section>
</div>
