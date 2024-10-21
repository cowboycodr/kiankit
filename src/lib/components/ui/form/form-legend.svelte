<script lang="ts">
	import * as FormPrimitive from 'formsnap';
	import { cn } from '@/utils.js';

	type $$Props = FormPrimitive.LegendProps;

	interface Props {
		class?: $$Props['class'];
		children?: import('svelte').Snippet<[any]>;
		[key: string]: any;
	}

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<FormPrimitive.Legend
	{...rest}
	class={cn('text-sm font-medium leading-none data-[fs-error]:text-destructive', className)}
>
	{#snippet children({ legendAttrs })}
		{@render children?.({ legendAttrs })}
	{/snippet}
</FormPrimitive.Legend>
