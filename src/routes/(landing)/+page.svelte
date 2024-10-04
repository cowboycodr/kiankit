<script lang="ts">
	import { enhance } from '$app/forms';

	import ArrowRightIcon from 'lucide-svelte/icons/arrow-right';

	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';

	const features = [
		{
			title: 'Lorem Ipsum',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			title: 'Vestibulum Accumsan',
			description: 'Vestibulum accumsan velit ut turpis scelerisque, sit amet cursus nisl gravida.'
		},
		{
			title: 'Aenean Consectetur',
			description: 'Aenean consectetur lacus eu nulla auctor, a tincidunt nisi egestas.'
		},
		{
			title: 'Nullam Tristique',
			description: 'Nullam tristique tortor a risus volutpat, ac hendrerit lorem finibus.'
		},
		{
			title: 'Pellentesque Habitasse',
			description: 'Pellentesque habitasse platea dictumst. Etiam nec tempor orci.'
		},
		{
			title: 'Curabitur Volutpat',
			description: 'Curabitur volutpat metus eget eros convallis, nec fermentum justo luctus.'
		}
	];
</script>

<div class="container max-w-[1024px] space-y-12 py-12">
	<div class="space-y-3">
		<h1 class="text-3xl font-bold tracking-tighter md:text-4xl">Lorem ipsum dolor sit amet</h1>
		<p class="text-lg text-muted-foreground md:w-[50%]">
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur.
		</p>
		<div class="flex space-x-3 pt-1">
			<form
				class="flex w-full items-center rounded-full border border-foreground/10 bg-gradient-to-t from-muted to-muted/60 p-1 pl-4 shadow-sm md:max-w-sm"
			>
				<input
					name="email"
					type="email"
					placeholder="Email address"
					class="w-full bg-transparent placeholder-muted-foreground outline-none"
				/>
				<Button
					variant="none"
					size="sm"
					class="h-8 rounded-full border border-foreground/10 bg-gradient-to-t from-primary to-primary/70 text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary/90 dark:bg-gradient-to-b"
					type="submit"
				>
					<span>Get notified</span>
					<ArrowRightIcon size={18} class="ml-2" />
				</Button>
			</form>
		</div>
	</div>
	<div class="space-y-6">
		<h1 class="text-2xl font-semibold tracking-tighter md:text-3xl">Album</h1>
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
</div>
