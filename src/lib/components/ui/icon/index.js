import { tv } from 'tailwind-variants';
import Root from './icon.svelte';

const iconVariants = tv({
	base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium',
	variants: {
		size: {
			default: 'h-8 w-8',
			lg: 'h-16 w-16',
			xl: 'h-24 w-24'
		}
	},
	defaultVariants: {
		size: 'default'
	}
});

export { Root, Root as Icon, iconVariants };
