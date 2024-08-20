<script>
	import { mode } from 'mode-watcher';

	export let icon;
	export let active;
</script>

<button
	class="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full outline-1 outline-border hover:bg-muted"
	class:outline={active}
	on:click
>
	<svelte:component this={icon} class="h-[1.2rem] w-[1.2rem]" />
</button>
