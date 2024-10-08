<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	import CircleUserIcon from 'lucide-svelte/icons/circle-user';

	import { Button } from '@/components/ui/button';
	import * as Dropdown from '@/components/ui/dropdown-menu';

	$: ({ session } = $page.data);
</script>

<div class="hidden h-9 w-full justify-between md:flex">
	<div>
		<Button
			size="sm"
			variant="ghost"
			class="rounded-full text-foreground/60"
			target="_blank"
			href="https://github.com/cowboycodr/kiankit"
		>
			GitHub
		</Button>
		<Button size="sm" variant="ghost" class="rounded-full text-foreground/60" href="/#articles"
			>Articles</Button
		>
		<Button size="sm" variant="ghost" class="rounded-full text-foreground/60" href="/docs"
			>Docs
		</Button>
	</div>
	<!-- <div class="flex items-center">
		{#if session}
			<Dropdown.Root>
				<Dropdown.Trigger asChild let:builder>
					<Button builders={[builder]} size="icon" variant="ghost">
						<CircleUserIcon />
					</Button>
				</Dropdown.Trigger>
				<Dropdown.Content>
					<Dropdown.Group>
						<form method="POST" action="/auth?/logout" class="contents" use:enhance>
							<button type="submit" class="contents">
								<Dropdown.Item>Log out</Dropdown.Item>
							</button>
						</form>
					</Dropdown.Group>
				</Dropdown.Content>
			</Dropdown.Root>
		{:else}
			<div>
				<Button size="sm" variant="outline" href="/login">Log in</Button>
				<Button size="sm" href="/signup">Sign up</Button>
			</div>
		{/if}
	</div> -->
</div>
