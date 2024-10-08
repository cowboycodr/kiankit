import type { Action } from 'svelte/action';

/**
 * A Svelte action that navigates back in the browser history once when the element is clicked.
 *
 * @param {HTMLElement} node - The element to attach the history back action to.
 */
export const historyBack: Action<HTMLElement> = (node) => {
	const handleClick = () => {
		window.history.back();
	};

	node.addEventListener('click', handleClick);

	return {
		destroy() {
			node.removeEventListener('click', handleClick);
		}
	};
};
