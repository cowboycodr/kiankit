<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '@/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	interface Props {
		class?: $$Props['class'];
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<div class={cn('p-6', className)} {...rest}>
	{@render children?.()}
</div>
