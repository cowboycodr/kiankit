<script lang="ts">
	import * as Card from '@/components/ui/card';

	export let data;
	$: ({ posts } = data);
</script>

<div class="container max-w-[1024px] py-12">
	<div class="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each posts as post}
			<a href={`/blog/${post.slug}`}>
				<Card.Root>
					<Card.Header>
						<Card.Title>
							{post.title}
						</Card.Title>
						<Card.Description>
							{post.description}
						</Card.Description>
					</Card.Header>
					<Card.Content />
				</Card.Root>
			</a>
		{/each}
	</div>
</div>
