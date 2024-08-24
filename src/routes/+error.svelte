<script>
    import { page } from "$app/stores";

    import { Button } from '$ui/button';
    import Navbar from "./(marketing)/(navbar)/navbar.svelte";
</script>

<Navbar />

<div class="container my-12 max-w-[1024px] space-y-12">
	<div class="space-y-3">
		<h1 class="text-3xl font-bold tracking-tighter md:text-4xl">
			{$page.status}
		</h1>
		<p class="text-lg text-muted-foreground md:w-[50%]">
			{#if $page.status === 404}
                Page not found. Make sure you're signed in.
            {:else}
                {$page.error.message}
            {/if}
		</p>
		<div class="flex space-x-3 pt-1">
            <Button size="sm" href="/login">Log in</Button>
			<Button variant="outline" size="sm" href="/signup">Go to homepage</Button>
			<!-- <Button
				variant="outline"
				size="sm"
				href="https://github.com/cowboycodr/kiankit"
				target="_blank">Star on GitHub</Button
			> -->
		</div>
	</div>
	<!-- <div class="space-y-6">
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
	</div> -->
</div>
