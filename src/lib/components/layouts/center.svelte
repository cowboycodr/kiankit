<script lang="ts">
	import { type Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="flex min-h-dvh w-full items-center justify-center bg-secondary px-3">
	{@render children?.()}
</div>
