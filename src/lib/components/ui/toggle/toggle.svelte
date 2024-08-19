<script>
	import { Toggle as TogglePrimitive } from "bits-ui";
	import { toggleVariants } from "./index.js";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export let variant = "default";
	export let size = "default";
	export let pressed = undefined;
	export { className as class };
</script>

<TogglePrimitive.Root
	bind:pressed
	class={cn(toggleVariants({ variant, size, className }))}
	{...$$restProps}
	on:click
>
	<slot />
</TogglePrimitive.Root>
