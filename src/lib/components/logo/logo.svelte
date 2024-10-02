<script lang="ts">
	import { cn } from '@/utils';

	import { tv, type VariantProps } from 'tailwind-variants';
	import Logo from 'lucide-svelte/icons/hexagon';

	export const variants = tv({
		base: 'fill-primary text-primary',
		variants: {
			size: {
				md: 'h-8 h-8',
				sm: 'h-7 w-7'
			}
		},
		defaultVariants: {
			size: 'md'
		}
	});

	let className: string | undefined = '';
	export { className as class };
	export let size: VariantProps<typeof variants>['size'] = 'md';
</script>

<Logo class={cn(variants({ size }), className)} />
