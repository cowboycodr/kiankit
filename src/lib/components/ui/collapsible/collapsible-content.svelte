<script>
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
	import { slide } from 'svelte/transition';
	export let transition = slide;
	export let transitionConfig = {
		duration: 150
	};
</script>

<CollapsiblePrimitive.Content {transition} {transitionConfig} {...$$restProps}>
	<slot />
</CollapsiblePrimitive.Content>
