<script lang="ts">
	import * as FormPrimitive from 'formsnap';
	import { cn } from '@/utils.js';

	type $$Props = FormPrimitive.FieldErrorsProps & {
		errorClasses?: string | undefined | null;
	};

	interface Props {
		class?: $$Props['class'];
		errorClasses?: $$Props['class'];
		children?: import('svelte').Snippet<[any]>;
		[key: string]: any;
	}

	let {
		class: className = undefined,
		errorClasses = undefined,
		children,
		...rest
	}: Props = $props();
</script>

<FormPrimitive.FieldErrors class={cn('text-sm font-medium text-destructive', className)} {...rest}>
	{#snippet children({ errors, fieldErrorsAttrs, errorAttrs })}
		{#if children}{@render children({ errors, fieldErrorsAttrs, errorAttrs })}{:else}
			{#each errors as error}
				<div {...errorAttrs} class={cn(errorClasses)}>{error}</div>
			{/each}
		{/if}
	{/snippet}
</FormPrimitive.FieldErrors>
