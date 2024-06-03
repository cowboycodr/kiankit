<script>
	import { Icon } from '$ui/icon';
	import { Hexagon as Logo } from 'lucide-svelte';

	export let size = undefined;
</script>

<Icon {size}>
	<Logo class="h-full w-full fill-primary text-primary" />
</Icon>
