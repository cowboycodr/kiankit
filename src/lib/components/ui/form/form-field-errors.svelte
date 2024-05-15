<script>
	import * as FormPrimitive from "formsnap";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
	export let errorClasses = undefined;
</script>

<FormPrimitive.FieldErrors
	class={cn("text-sm font-medium text-destructive", className)}
	{...$$restProps}
	let:errors
	let:fieldErrorsAttrs
	let:errorAttrs
>
	<slot {errors} {fieldErrorsAttrs} {errorAttrs}>
		{#each errors as error}
			<div {...errorAttrs} class={cn(errorClasses)}>{error}</div>
		{/each}
	</slot>
</FormPrimitive.FieldErrors>
