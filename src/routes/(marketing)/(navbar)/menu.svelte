<script>
	import { page } from '$app/stores';

	import Menu from 'lucide-svelte/icons/menu';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';

	import { Button } from '$ui/button';
	import * as Sheet from '$ui/sheet';

	import AuthButtons from './auth-buttons.svelte';
	import ThemeToggle from './theme-toggle.svelte';
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
			<UserDropdown {session} />
		{:else}
			<AuthButtons />
		{/if}
	</div>
	<div class="md:hidden">
		<Sheet.Root>
			<Sheet.Trigger asChild let:builder>
				<Button builders={[builder]} size="icon-sm" variant="ghost">
					<Menu />
				</Button>
			</Sheet.Trigger>
			<Sheet.Content class="flex h-full flex-col">
				<Sheet.Header>
					<Sheet.Title>KianKit</Sheet.Title>
				</Sheet.Header>
				<div class="flex-grow space-y-5">
					<div>
						{#if session}
							<form method="POST" action="/auth?/signout" class="contents">
								<Button variant="outline" type="submit">Sign out</Button>
							</form>
						{:else}
							<div class="w-full space-y-3">
								<Button href="/auth/signup" class="w-full" size="sm">Sign up</Button>
								<Button href="/auth/login" variant="outline" class="w-full" size="sm">
									Log in
								</Button>
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
							<!-- <ChevronDown class="h-4" /> -->
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
