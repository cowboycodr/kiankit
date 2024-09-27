<script lang="ts">
	import { page } from '$app/stores';

	import MenuIcon from 'lucide-svelte/icons/menu';
	import ChevronDownIcon from 'lucide-svelte/icons/chevron-down';
	import LogOutIcon from 'lucide-svelte/icons/log-out';

	import { Button } from '$ui/button';
	import * as Sheet from '$ui/sheet';
	import { ThemeToggle } from '$components/navbar';

	import AuthButtons from './auth-buttons.svelte';
	import UserDropdown from './user-dropdown.svelte';

	let { session } = $page.data;
	({ session } = $page.data);
</script>

<div class="hidden items-center space-x-1 md:flex">
	<Button
		size="sm"
		variant="ghost"
		class="rounded-full text-foreground/60"
		href="https://github.com/cowboycodr/KianKit"
		target="_blank"
	>
		GitHub
	</Button>
	<Button
		size="sm"
		variant="ghost"
		class="rounded-full text-foreground/60"
		href="https://docs.fromkian.com"
		target="_blank">Docs</Button
	>
</div>
<div class="flex w-full items-center justify-end space-x-1">
	<div class="hidden items-center space-x-1 md:flex">
		{#if session}
			<UserDropdown />
		{:else}
			<AuthButtons />
		{/if}
	</div>
	<div class="md:hidden">
		<Sheet.Root>
			<Sheet.Trigger asChild let:builder>
				<Button builders={[builder]} size="icon-sm" variant="ghost">
					<MenuIcon />
				</Button>
			</Sheet.Trigger>
			<Sheet.Content class="flex h-full flex-col">
				<Sheet.Header>
					<Sheet.Title>KianKit</Sheet.Title>
				</Sheet.Header>
				<div class="flex-grow space-y-5">
					<div>
						{#if session}
							<form method="POST" action="/auth?/logOut" class="contents">
								<Button class="flex w-full space-x-1" variant="outline" type="submit">
									<LogOutIcon class="h-[1.2rem] w-[1.2rem]" />
									<span> Log out </span>
								</Button>
							</form>
						{:else}
							<div class="w-full space-y-3">
								<Button href="/signup" class="w-full" size="sm">Sign up</Button>
								<Button href="/login" variant="outline" class="w-full" size="sm">Log in</Button>
							</div>
						{/if}
					</div>
					<div class="text-foreground/60">
						<Button
							variant="ghost"
							class="w-full justify-between text-base"
							href="https://github.com/cowboycodr/kiankit"
							target="_blank">Github</Button
						>
						<Button
							variant="ghost"
							class="w-full justify-between text-base"
							href="https://docs.fromkian.com"
							target="_blank"
						>
							Docs
							<ChevronDownIcon class="h-4" />
						</Button>
					</div>
				</div>
				<Sheet.Footer class="w-full flex-row justify-end">
					<ThemeToggle />
				</Sheet.Footer>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</div>
