<script lang="ts">
	import { cn } from '@/utils';

	import { tv, type VariantProps } from 'tailwind-variants';
	import Logo from 'lucide-svelte/icons/hexagon';

	export const variants = tv({
		base: 'fill-primary text-primary',
		variants: {
			size: {
				sm: 'h-8 w-8',
				md: 'h-9 w-9',
				lg: 'h-16 w-16',
				xl: 'h-36 w-36'
			}
		},
		defaultVariants: {
			size: 'md'
		}
	});

	interface Props {
		class?: string | undefined;
		size?: VariantProps<typeof variants>['size'];
	}

	let { class: className = '', size = 'md' }: Props = $props();
</script>

<Logo class={cn(variants({ size }), className)} />
