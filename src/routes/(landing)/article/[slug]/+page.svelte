<script>
	import { marked } from 'marked';
	import { Separator } from '@/components/ui/separator';

	export let data;
	let { blog, content } = data;
</script>

<main class="container max-w-[1024px] py-12">
	<article class="prose m-auto dark:prose-invert">
		<h1 class="">
			{blog.title}
		</h1>
		<p class="text-muted-foreground">
			{blog.description}
		</p>
		<Separator />
	</article>
</main>
