import type { Action } from 'svelte/action';

/**
 * A Svelte action that automatically resizes a textarea element based on its content.
 * It adjusts the height of the textarea whenever the user types or when the value changes programmatically.
 *
 * @param {HTMLTextAreaElement} node - The textarea element to be resized.
 */
export const autosize: Action<HTMLTextAreaElement> = (node) => {
	const handleResize = (): void => {
		node.style.height = 'auto';
		node.style.height = `${node.scrollHeight}px`;
	};

	node.addEventListener('input', handleResize);

	const observer = new MutationObserver(handleResize);
	observer.observe(node, { attributes: true, attributeFilter: ['value'] });

	handleResize();

	return {
		update(): void {
			handleResize();
		},
		destroy(): void {
			node.removeEventListener('input', handleResize);
			observer.disconnect();
		}
	};
};
