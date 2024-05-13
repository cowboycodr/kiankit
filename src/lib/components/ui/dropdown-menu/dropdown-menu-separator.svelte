<script>
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';
	let className = undefined;
	export { className as class };
</script>

<DropdownMenuPrimitive.Separator
	class={cn('-mx-1 my-1 h-px bg-muted', className)}
	{...$$restProps}
/>
