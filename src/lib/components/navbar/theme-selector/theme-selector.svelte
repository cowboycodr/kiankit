<script>
	import { setMode, mode, systemPrefersMode } from 'mode-watcher';

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

	let isSystemTheme = false;
</script>

<div class="flex items-center rounded-full border">
	{#each themes as theme}
		{@const active =
			(theme.target === $mode && !isSystemTheme) || (theme.target === 'system' && isSystemTheme)}
		<ThemeItem
			mode={theme.target}
			icon={theme.icon}
			{active}
			on:click={() => {
				setMode(theme.target);
				isSystemTheme = theme.target === 'system';
			}}
		/>
	{/each}
</div>
