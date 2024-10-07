<script>
	import { Separator } from '@/components/ui/separator';

	export let data;
	let { blog, content } = data;
</script>

<main class="container max-w-[1024px] py-12">
	<article class="prose m-auto dark:prose-invert">
		<p class="text-xs text-muted-foreground">
			{blog.date}
		</p>
		<h1 class="">
			{blog.title}
		</h1>
		<Separator />
		{@html content}
	</article>
</main>
