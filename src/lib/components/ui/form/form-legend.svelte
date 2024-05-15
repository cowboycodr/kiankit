<script>
	import * as FormPrimitive from "formsnap";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
</script>

<FormPrimitive.Legend
	{...$$restProps}
	class={cn("text-sm font-medium leading-none data-[fs-error]:text-destructive", className)}
	let:legendAttrs
>
	<slot {legendAttrs} />
</FormPrimitive.Legend>
