<script lang="ts">
	interface Props {
		left?: import('svelte').Snippet;
		right?: import('svelte').Snippet;
	}

	let { left, right }: Props = $props();
</script>

<div class="relative flex min-h-dvh">
	<div class="flex w-full items-center justify-center bg-secondary p-3">
		{@render left?.()}
	</div>
	<div class="hidden w-full items-center justify-center p-3 lg:flex">
		{@render right?.()}
	</div>
</div>
