import { tv } from 'tailwind-variants';
import Root from './icon.svelte';

const iconVariants = tv({
    base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium',
    variants: {
        size: {
            default: 'h-10 w-10'
        }
    },
    defaultVariants: {
        size: 'default'
    }
})

export { Root, Root as Icon, iconVariants };