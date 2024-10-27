<script lang="ts">
	interface Props {
		children?: import('Svelte').Snippet;
	}

	let { children } = $props();
</script>

<div class="flex min-h-dvh w-full items-center justify-center bg-secondary px-3">
	{@render children?.()}
</div>
