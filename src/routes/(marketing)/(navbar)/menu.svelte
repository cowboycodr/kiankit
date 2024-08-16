<script>
	import { page } from '$app/stores';

    import Menu from 'lucide-svelte/icons/menu';

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
		class="rounded-full"
		href="https://github.com/cowboycodr/KianKit"
		target="_blank"
	>
		Github
	</Button>
	<Button size="sm" variant="ghost" class="rounded-full">Documentation</Button>
</div>
<div class="flex w-full items-center justify-end space-x-1">
	<ThemeToggle />
	<div class="hidden md:block">
		{#if session}
			<UserDropdown {session} />
		{:else}
			<AuthButtons />
		{/if}
	</div>
    <div class="md:hidden">
        <Sheet.Root open>
            <Sheet.Trigger asChild let:builder>
                <Button builders={[builder]} size="icon-sm" variant="ghost">
                    <Menu />
                </Button>
            </Sheet.Trigger>
            <Sheet.Content class="flex flex-col h-full">
                <Sheet.Header>
                    <Sheet.Title>
                        Menu
                    </Sheet.Title>
                </Sheet.Header>
                <div>
                    <div>
                        {#if session}
                        <form method="POST" action="/auth?/signout" class="contents">
                            <Button variant="outline" type="submit">
                                Sign out
                            </Button>
                        </form>
                    {:else}
                        <div class="w-full space-y-1">
                            <Button href="/auth/login" class="w-full" size="sm">
                                Sign up
                            </Button>
                            <Button href="/auth/login" variant="outline" class="w-full" size="sm">
                                Log in
                            </Button>
                        </div>
                    {/if}
                    </div>
                </div>
            </Sheet.Content>
        </Sheet.Root>
    </div>
</div>
