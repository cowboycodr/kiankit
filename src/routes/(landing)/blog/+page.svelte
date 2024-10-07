<script lang="ts">
	import * as Card from '@/components/ui/card';

	export let data;
	$: ({ posts } = data);
</script>

<div class="container max-w-[1024px] py-12">
	<div class="grid auto-rows-fr">
		{#each posts as post}
			<Card.Root>
				<Card.Header>
					<Card.Title>
						{post.title}
					</Card.Title>
				</Card.Header>
				<Card.Content />
			</Card.Root>
		{/each}
	</div>
</div>
