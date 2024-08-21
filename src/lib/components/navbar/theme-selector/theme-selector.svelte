<script>
	import { setMode, mode, systemPrefersMode, userPrefersMode } from 'mode-watcher';

	import HardDrive from 'lucide-svelte/icons/hard-drive';
	import MoonIcon from 'lucide-svelte/icons/moon';
	import SunIcon from 'lucide-svelte/icons/sun';

	import ThemeItem from './theme-item.svelte';

	const themes = [
		{
			target: 'system',
			icon: HardDrive
		},
		{
			target: 'dark',
			icon: MoonIcon
		},
		{
			target: 'light',
			icon: SunIcon
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
			
			on:click={() => { setMode(theme.target) }}
		/>
	{/each}
</div>
