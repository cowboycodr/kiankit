<script lang="ts">
	import { page } from '$app/stores';

	import MenuIcon from 'lucide-svelte/icons/menu';

	import { ThemeToggle } from '@/components/theme-controller';
	import { buttonVariants } from '@/components/ui/button';
	import { Button } from '@/components/ui/button';
	import * as Sheet from '@/components/ui/sheet';

	let { session } = $derived($page.data);
	let open: boolean = $state(false);
</script>

<div class="md:hidden">
	<Sheet.Root>
		<Sheet.Trigger class={buttonVariants({ variant: 'ghost', size: 'sm' })}>
			<MenuIcon />
		</Sheet.Trigger>
		<Sheet.Content class="flex flex-col">
			<Sheet.Header>
				<Sheet.Title>KianKit</Sheet.Title>
			</Sheet.Header>
			<div class="flex-1 space-y-5">
				<div class="text-muted-foreground">
					<Button
						class="w-full justify-between text-base"
						variant="ghost"
						target="_blank"
						href="https://github.com/cowboycodr/kiankit"
					>
						<span> GitHub </span>
					</Button>
					<Button
						class="w-full justify-between text-base"
						variant="ghost"
						href="/#articles"
						onclick={() => {
							open = false;
						}}
					>
						<span> Articles </span>
					</Button>
					<Button class="w-full justify-between text-base" variant="ghost" href="/docs">
						<span> Docs </span>
					</Button>
					<Button
						class="w-full justify-between text-base"
						variant="ghost"
						target="_blank"
						href="https://demo.kian.im"
					>
						<span> Demo </span>
					</Button>
				</div>
			</div>
			<div>
				<ThemeToggle />
			</div>
		</Sheet.Content>
	</Sheet.Root>
</div>
