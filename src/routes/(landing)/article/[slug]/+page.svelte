<script>
	import { Separator } from '@/components/ui/separator';

	export let data;
	let { blog, content } = data;
</script>

<main class="container max-w-[1024px] py-12">
	<article class="prose m-auto dark:prose-invert">
		<div class="flex justify-between">
			<p>
				{blog.author}
			</p>
			<p>
				{blog.date}
			</p>
		</div>
		<h1 class="">
			{blog.title}
		</h1>
		<Separator />
		{@html content}
	</article>
</main>
