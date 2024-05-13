<script>
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	export let value = undefined;
</script>

<DropdownMenuPrimitive.RadioGroup {...$$restProps} bind:value>
	<slot />
</DropdownMenuPrimitive.RadioGroup>
