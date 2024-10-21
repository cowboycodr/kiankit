<script lang="ts" module>
	import type { FormPathLeaves, SuperForm } from 'sveltekit-superforms';
	type T = Record<string, unknown>;
	type U = FormPathLeaves<T>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends FormPathLeaves<T>">
	import type { HTMLAttributes } from 'svelte/elements';
	import * as FormPrimitive from 'formsnap';
	import { cn } from '@/utils.js';

	type $$Props = FormPrimitive.ElementFieldProps<T, U> & HTMLAttributes<HTMLElement>;

	interface Props {
		form: SuperForm<T>;
		name: U;
		class?: $$Props['class'];
		children?: import('svelte').Snippet<[any]>;
	}

	let { form, name, class: className = undefined, children }: Props = $props();
</script>

<FormPrimitive.ElementField {form} {name}>
	{#snippet children({ constraints, errors, tainted, value })}
		<div class={cn('space-y-2', className)}>
			{@render children?.({ constraints, errors, tainted, value })}
		</div>
	{/snippet}
</FormPrimitive.ElementField>
