<script lang="ts">
	import { page } from '$app/stores';

	import { Button } from '@/components/ui/button';
</script>

<div class="hidden h-9 w-full justify-between md:flex">
	<div>
		<Button
			size="sm"
			variant="ghost"
			class="rounded-full text-foreground/60"
			target="_blank"
			href="https://github.com/cowboycodr/kiankit"
		>
			GitHub
		</Button>
		<Button size="sm" variant="ghost" class="rounded-full text-foreground/60" href="/#articles"
			>Articles</Button
		>
		<Button size="sm" variant="ghost" class="rounded-full text-foreground/60" href="/docs"
			>Docs
		</Button>
		<Button
			size="sm"
			variant="ghost"
			class="rounded-full text-foreground/60"
			target="_blank"
			href="https://demo.kian.im"
		>
			Demo
		</Button>
	</div>
</div>
