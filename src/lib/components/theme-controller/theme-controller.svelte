<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { setMode } from 'mode-watcher';

	import HardDrive from '@lucide/svelte/icons/hard-drive';
	import Moon from '@lucide/svelte/icons/moon';
	import Sun from '@lucide/svelte/icons/sun';

	let activeTheme = $state('light');

	function updateTheme() {
		if (!browser) return;
		// Read user preference from localStorage (mode-watcher stores it as 'mode-watcher')
		const stored = localStorage.getItem('mode-watcher');
		if (stored === 'dark' || stored === 'light' || stored === 'system') {
			activeTheme = stored;
		} else {
    // Fallback: check document classes
			const html = document.documentElement;
			if (html.classList.contains('dark')) {
				activeTheme = 'dark';
			} else if (html.classList.contains('light')) {
				activeTheme = 'light';
			} else {
				activeTheme = 'system';
			}
		}
	}

	onMount(() => {
		if (!browser) return;
		
		updateTheme();
		
		// Watch for storage changes (when mode-watcher updates localStorage)
		// Note: storage event only fires for changes from other windows/tabs
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === 'mode-watcher' || e.key?.includes('mode')) {
				updateTheme();
			}
		};
		window.addEventListener('storage', handleStorageChange);
		
		// Watch for class changes on documentElement
		const observer = new MutationObserver(updateTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});
		
		// Also listen for custom events if mode-watcher emits them
		const handleModeChange = () => updateTheme();
		window.addEventListener('mode-watcher:change', handleModeChange as EventListener);
		
		// Poll localStorage periodically to catch same-window changes
		// (since storage event doesn't fire for same-window changes)
		const interval = setInterval(() => {
			updateTheme();
		}, 100);
		
		return () => {
			clearInterval(interval);
			window.removeEventListener('storage', handleStorageChange);
			window.removeEventListener('mode-watcher:change', handleModeChange as EventListener);
			observer.disconnect();
		};
	});

	function handleThemeClick(target: 'dark' | 'light' | 'system') {
		setMode(target);
		activeTheme = target;
		// Also update after a short delay to catch any mode-watcher updates
		setTimeout(updateTheme, 0);
	}
</script>

<div class="flex items-center rounded-full border shadow-xs">
	<button
		class="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full outline-1 outline-border hover:bg-muted"
		class:outline={activeTheme === 'system'}
		onclick={() => handleThemeClick('system')}
		aria-label="system theme icon"
	>
		<HardDrive class="h-[1.2rem] w-[1.2rem]" />
	</button>

	<button
		class="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full outline-1 outline-border hover:bg-muted"
		class:outline={activeTheme === 'dark'}
		onclick={() => handleThemeClick('dark')}
		aria-label="dark theme icon"
	>
		<Moon class="h-[1.2rem] w-[1.2rem]" />
	</button>

	<button
		class="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full outline-1 outline-border hover:bg-muted"
		class:outline={activeTheme === 'light'}
		onclick={() => handleThemeClick('light')}
		aria-label="light theme icon"
	>
		<Sun class="h-[1.2rem] w-[1.2rem]" />
	</button>
</div>
