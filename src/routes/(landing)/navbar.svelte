<script lang="ts">
	import MenuIcon from 'lucide-svelte/icons/menu';
	import ChevronDownIcon from 'lucide-svelte/icons/chevron-down';
	import LogOutIcon from 'lucide-svelte/icons/log-out';

	import { Logo } from '@/components/logo';
	import { Button } from '@/components/ui/button';
	import * as Sheet from '@/components/ui/sheet';
	import type { Session } from '@supabase/supabase-js';

	export let session: Session;

	let scrollY: number;
</script>

<svelte:window bind:scrollY />

<header class="sticky top-0 w-full bg-background {scrollY > 0 ? 'border-b' : ''}">
	<nav class="container flex w-full max-w-[1024px] items-center space-x-5 p-4">
		<div class="flex w-full items-center space-x-3 md:w-auto">
			<div class="hidden md:contents">
				<Logo size="sm" />
			</div>
			<div class="contents md:hidden">
				<Logo size="md" />
			</div>
			<h3 class="hidden text-nowrap text-lg font-medium md:block">Acme</h3>
		</div>
		<div class="hidden w-full justify-between md:flex">
			<div>
				<Button size="sm" variant="ghost" class="rounded-full text-foreground/60" href="/product">
					Product
				</Button>
				<Button size="sm" variant="ghost" class="rounded-full text-foreground/60" href="/pricing"
					>Pricing</Button
				>
				<Button size="sm" variant="ghost" class="rounded-full text-foreground/60" href="/blog"
					>Blog</Button
				>
			</div>
			<div>
				<Button size="sm" variant="outline" href="/login">Log in</Button>
				<Button size="sm" href="/signup">Sign up</Button>
			</div>
		</div>
		<div class="md:hidden">
			<Sheet.Root>
				<Sheet.Trigger asChild let:builder>
					<Button builders={[builder]} variant="ghost" size="sm">
						<MenuIcon />
					</Button>
				</Sheet.Trigger>
				<Sheet.Content class="flex flex-col">
					<Sheet.Header>
						<Sheet.Title>Acme</Sheet.Title>
					</Sheet.Header>
					<div class="flex-1 space-y-5">
						<div class="space-y-3">
							{#if session}
								<Button class="w-full" variant="outline">
									<LogOutIcon class="h-[1.2rem] w-[1.2rem]" />
									<span> Log out </span>
								</Button>
							{:else}
								<Button class="w-full" variant="outline" href="/signup">Sign up</Button>
								<Button class="w-full" href="/login">Log in</Button>
							{/if}
						</div>
						<div class="text-muted-foreground">
							<Button class="w-full justify-between text-base" variant="ghost">
								<span> Product </span>
								<ChevronDownIcon class="h-[1.2rem] w-[1.2rem]" />
							</Button>
							<Button class="w-full justify-between text-base" variant="ghost">
								<span> Pricing </span>
							</Button>
							<Button class="w-full justify-between text-base" variant="ghost">
								<span> Blog </span>
							</Button>
						</div>
					</div>
					<div></div>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</nav>
</header>
