<script>
	import { ToggleGroup as ToggleGroupPrimitive } from "bits-ui";
	import { getToggleGroupCtx } from "./index.js";
	import { cn } from "$lib/utils.js";
	import { toggleVariants } from "$lib/components/ui/toggle/index.js";
	let className = undefined;
	export { className as class };
	export let variant = "default";
	export let size = "default";
	export let value;
	const ctx = getToggleGroupCtx();
</script>

<ToggleGroupPrimitive.Item
	class={cn(
		toggleVariants({
			variant: ctx.variant || variant,
			size: ctx.size || size,
		}),
		className
	)}
	{value}
	{...$$restProps}
>
	<slot />
</ToggleGroupPrimitive.Item>
