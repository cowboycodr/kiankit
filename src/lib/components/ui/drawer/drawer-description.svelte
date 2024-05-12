<script>
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';
	import { cn } from '$lib/utils.js';
	export let el = undefined;
	let className = undefined;
	export { className as class };
</script>

<DrawerPrimitive.Description
	bind:el
	class={cn('text-sm text-muted-foreground', className)}
	{...$$restProps}
>
	<slot />
</DrawerPrimitive.Description>
