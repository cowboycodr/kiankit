<script lang="ts">
	import { setMode, mode, userPrefersMode } from 'mode-watcher';

	import HardDrive from 'lucide-svelte/icons/hard-drive';
	import MoonIcon from 'lucide-svelte/icons/moon';
	import SunIcon from 'lucide-svelte/icons/sun';

	$: activeTheme = $userPrefersMode ?? $mode ?? 'light';

	function handleThemeClick(target: 'dark' | 'light' | 'system') {
		setMode(target);
	}
</script>

<div class="flex items-center rounded-full border shadow-sm">
	<button
		class="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full outline-1 outline-border hover:bg-muted"
		class:outline={activeTheme === 'system'}
		on:click={() => handleThemeClick('system')}
		aria-label="system theme icon"
	>
		<HardDrive class="h-[1.2rem] w-[1.2rem]" />
	</button>

	<button
		class="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full outline-1 outline-border hover:bg-muted"
		class:outline={activeTheme === 'dark'}
		on:click={() => handleThemeClick('dark')}
		aria-label="dark theme icon"
	>
		<MoonIcon class="h-[1.2rem] w-[1.2rem]" />
	</button>

	<button
		class="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full outline-1 outline-border hover:bg-muted"
		class:outline={activeTheme === 'light'}
		on:click={() => handleThemeClick('light')}
		aria-label="light theme icon"
	>
		<SunIcon class="h-[1.2rem] w-[1.2rem]" />
	</button>
</div>
