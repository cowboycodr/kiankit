<script lang="ts">
	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';

	export let data;
	$: ({ posts } = data);

	const features = [
		{
			title: 'Rapid Setup',
			description:
				'Get started with a full-stack application in minutes using SvelteKit, Supabase, and TailwindCSS.'
		},
		{
			title: 'Integrated Auth',
			description:
				'Supabase authentication with support for OAuth, Magic Links, and traditional email/password flows.'
		},
		{
			title: 'Developer Experience',
			description:
				'Pre-configured tools like Vite, TypeScript, and ESLint to boost productivity and maintain code quality.'
		},
		{
			title: 'UI Libraries Included',
			description:
				'Includes Radix UI and TailwindCSS for creating beautiful, responsive interfaces effortlessly.'
		},
		{
			title: 'Open Source',
			description:
				'Fully open-source, allowing the community to contribute and improve upon the foundation on GitHub.'
		},
		{
			title: 'Supabase Integration',
			description:
				'Easily connect to PostgreSQL databases and leverage real-time capabilities using Supabase client.'
		}
	];
</script>

<div class="container max-w-[1024px] space-y-12 py-12">
	<div class="space-y-3">
		<h1 class="text-3xl font-bold tracking-tighter md:text-4xl">Build faster with KianKit</h1>
		<p class="text-lg text-muted-foreground md:w-[50%]">
			KianKit is your go-to starter kit for rapid application development. Entirely open-source.
		</p>
		<div class="flex space-x-3 pt-1">
			<Button
				variant="none"
				class="border border-foreground/10 bg-gradient-to-t from-primary to-primary/70 text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary/90 dark:bg-gradient-to-b"
				href="/docs"
			>
				Read the docs
			</Button>
			<Button variant="outline" target="_blank" href="https://github.com/cowboycodr/kiankit"
				>Star on GitHub</Button
			>
		</div>
	</div>
	<div class="space-y-6">
		<h2 class="text-2xl font-semibold tracking-tighter md:text-3xl">What's in the box?</h2>
		<div class="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<Card.Root class="bg-gradient-to-t from-muted to-muted/60">
					<Card.Header>
						<Card.Title>
							{feature.title}
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<div class="text-sm text-muted-foreground">
							{feature.description}
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
	<div class="space-y-6" id="blog">
		<h2 class="text-2xl font-semibold tracking-tighter md:text-3xl">
			We have more to say <span class="text-muted-foreground">– read some of our articles</span>
		</h2>
		<div class="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each posts as post}
				<a class="contents" href={`/article/${post.slug}`}>
					<Card.Root class="bg-gradient-to-t from-muted to-muted/60">
						<Card.Header>
							<Card.Title>
								{post.title}
							</Card.Title>
						</Card.Header>
						<Card.Content>
							<div class="text-sm text-muted-foreground">
								{post.description}
							</div>
						</Card.Content>
					</Card.Root>
				</a>
			{/each}
		</div>
	</div>
</div>
