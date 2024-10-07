<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	import MenuIcon from 'lucide-svelte/icons/menu';
	import LogOutIcon from 'lucide-svelte/icons/log-out';
	import ChevronDownIcon from 'lucide-svelte/icons/chevron-down';

	import { ThemeToggle } from '@/components/theme-controller';
	import { Button } from '@/components/ui/button';
	import * as Sheet from '@/components/ui/sheet';

	$: ({ session } = $page.data);
</script>

<div class="md:hidden">
	<Sheet.Root>
		<Sheet.Trigger asChild let:builder>
			<Button builders={[builder]} variant="ghost" size="sm">
				<MenuIcon />
			</Button>
		</Sheet.Trigger>
		<Sheet.Content class="flex flex-col">
			<Sheet.Header>
				<Sheet.Title>KianKit</Sheet.Title>
			</Sheet.Header>
			<div class="flex-1 space-y-5">
				<div class="space-y-3">
					{#if session}
						<form action="/auth?/logout" method="POST" class="contents" use:enhance>
							<Button class="w-full space-x-1" variant="outline" type="submit">
								<LogOutIcon size="16" />
								<span> Log out </span>
							</Button>
						</form>
					{:else}
						<Button class="w-full" variant="outline" href="/login">Log in</Button>
						<Button class="w-full" href="/signup">Sign up</Button>
					{/if}
				</div>
				<div class="text-muted-foreground">
					<Button
						class="w-full justify-between text-base"
						variant="ghost"
						target="_blank"
						href="https://github.com/cowboycodr/kiankit"
					>
						<span> GitHub </span>
					</Button>
					<Button class="w-full justify-between text-base" variant="ghost" href="/blog">
						<span> Blog </span>
					</Button>
					<Button class="w-full justify-between text-base" variant="ghost" href="/docs">
						<span> Docs </span>
						<ChevronDownIcon class="h-[1.2rem] w-[1.2rem]" />
					</Button>
				</div>
			</div>
			<div>
				<ThemeToggle />
			</div>
		</Sheet.Content>
	</Sheet.Root>
</div>
