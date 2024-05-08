<script>
	import { page } from '$app/stores';

	// General meta tags
	export let title = undefined;
	export let type = 'website';
	export let url = $page.url;
	export let image = undefined;
	export let siteName = undefined;
	export let description = undefined;

	// Twitter specific meta tags
	export let twitterUsername = undefined;
	export let twitterCard = 'summary_large_image';

	const metas = [
		{
			tags: ['og:title', 'twitter:title'],
			content: title
		},
		{
			tags: ['og:type'],
			content: type
		},
		{
			tags: ['og:url'],
			content: url
		},
		{
			tags: ['og:image', 'twitter:image'],
			content: image
		},
		{
			tags: ['og:site_name'],
			content: siteName
		},
		{
			tags: ['og:description', 'twitter:description'],
			content: description
		},
		{
			tags: ['twitter:card'],
			content: twitterCard
		},
		{
			tags: ['twitter:site', 'twitter:creator'],
			content: twitterUsername
		}
	];
</script>

<svelte:head>
	{#each metas as meta}
		{#if meta.content}
			{#each meta.tags as name}
				<meta {name} content={meta.content} />
			{/each}
		{/if}
	{/each}
</svelte:head>
