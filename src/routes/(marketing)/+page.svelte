<script>
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	import { Link } from 'lucide-svelte';

	import Navbar from './navbar.svelte';
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
			<Button
				href="https://github.com/cowboycodr/KianKit"
				target="_blank"
				class="flex space-x-2"
				variant="outline"
			>
				<span>
					<Fa icon={faGithub} />
				</span>
				<span> Star on GitHub </span>
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
			class="grid w-full max-w-[64rem] grid-flow-row auto-rows-max grid-cols-1 gap-2 py-4 md:grid-cols-3 md:gap-3 lg:gap-4"
		>
			{#each features as card}
				<Card.Root class="group">
					<Card.Header>
						<div class="flex items-center space-x-2">
							<Card.Title>
								{card.title}
							</Card.Title>
							<a
								title={card.title}
								class="hidden cursor-pointer text-primary md:group-hover:block"
								href={card.href}
								target="_blank"
							>
								<Link size="16" />
							</a>
						</div>
						<Card.Description>
							{card.description}
						</Card.Description>
						<div class="md:hidden">
							<a
								href={card.href}
								target="_blank"
								class="flex items-center space-x-1 text-primary md:hidden"
							>
								<Link size="14" />
								<span> Website </span>
							</a>
						</div>
					</Card.Header>
				</Card.Root>
			{/each}
		</div>
	</section>
</div>
