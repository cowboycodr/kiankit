<script lang="ts">
	import type { ComponentType } from 'svelte';
	import type { Icon } from 'lucide-svelte';

	import { setMode, mode, userPrefersMode } from 'mode-watcher';

	import HardDrive from 'lucide-svelte/icons/hard-drive';
	import MoonIcon from 'lucide-svelte/icons/moon';
	import SunIcon from 'lucide-svelte/icons/sun';

	import ThemeItem from './theme-item.svelte';

	interface Theme {
		target: 'dark' | 'light' | 'system';
		icon: ComponentType<Icon>;
	}

	const themes: Theme[] = [
		{
			target: 'system',
			icon: HardDrive as ComponentType<Icon>
		},
		{
			target: 'dark',
			icon: MoonIcon as ComponentType<Icon>
		},
		{
			target: 'light',
			icon: SunIcon as ComponentType<Icon>
		}
	];

	$: activeTheme = $userPrefersMode || $mode;
</script>

<div class="flex items-center rounded-full border">
	{#each themes as theme}
		{@const isThemeActive = activeTheme === theme.target}
		<ThemeItem
			icon={theme.icon}
			active={isThemeActive}
			on:click={() => {
				setMode(theme.target);
			}}
		/>
	{/each}
</div>
