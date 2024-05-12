<script>
	import { cn } from '$lib/utils.js';
	import { iconVariants } from './index.js';
	let className = undefined;
	export let variant = 'default';
	export let size = 'default';
	export { className as class };
</script>

<div class={cn(iconVariants({ variant, size, className }))}>
	<slot />
</div>
