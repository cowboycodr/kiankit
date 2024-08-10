<script>
	import { cn } from '$lib/utils';

	let className = undefined;
	export { className as class };
</script>

<header
	class={cn(
		'sticky left-0 right-0 top-0 z-50 border-b border-accent bg-background text-foreground',
		className
	)}
>
	<slot />
</header>
