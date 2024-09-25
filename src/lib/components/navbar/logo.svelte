<script lang="ts">
	import { cn } from '$lib/utils';
	import { Hexagon as Logo } from 'lucide-svelte';

	let className;
	export { className as class };
</script>

<Logo class={cn('fill-primary text-primary', className)} {...$$restProps} />
