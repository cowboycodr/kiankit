<script>
	import { page } from '$app/stores';

	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	import { Menu, User } from 'lucide-svelte';

	import { Navbar, Logo } from '$components/navbar';
	import { Button } from '$ui/button';
	import * as Dropdown from '$ui/dropdown-menu';
	import * as Sheet from '$ui/sheet';

	let { session } = $page.data;
	$: ({ session } = $page.data);
</script>

<Navbar>
	<nav class="container w-full p-2">
		<div class="flex justify-between">
			<div class="flex items-center">
				<div class="flex items-center space-x-1">
					<Logo />
					<h3 class="text-xl font-semibold">KianKit</h3>
				</div>
				<div class="hidden px-2 md:block">
					<Button
						class="space-x-1"
						href="https://github.com/cowboycodr/KianKit"
						variant="link"
						size="sm"
						target="_blank"
					>
						<div>
							<Fa size="lg" icon={faGithub} />
						</div>
						<span class="hidden md:block">Github</span>
					</Button>
				</div>
			</div>
			<div class="flex items-center space-x-1">
				{#if session}
					<div class="hidden md:block">
						<Dropdown.Root>
							<Dropdown.Trigger asChild let:builder>
								<Button builders={[builder]} class="space-x-1" variant="link" size="sm">
									<User />
								</Button>
							</Dropdown.Trigger>
							<Dropdown.Content class="min-w-48">
								<Dropdown.Label>Profile</Dropdown.Label>
								<Dropdown.Separator />
								<Dropdown.Group>
									<form method="POST" action="/auth?/signout">
										<button class="w-full" type="submit">
											<Dropdown.Item>Sign out</Dropdown.Item>
										</button>
									</form>
								</Dropdown.Group>
							</Dropdown.Content>
						</Dropdown.Root>
					</div>
				{:else}
					<div class="hidden md:block">
						<Button href="/auth/login" variant="secondary" size="sm">Log in</Button>
						<Button href="/auth/signup" size="sm">Sign up</Button>
					</div>
				{/if}
				<div class="md:hidden">
					<Button
						href="https://github.com/cowboycodr/KianKit"
						target="_blank"
						variant="ghost"
						size="icon"
					>
						<Fa size="24" icon={faGithub} />
					</Button>
					<Sheet.Root>
						<Sheet.Trigger asChild let:builder>
							<Button builders={[builder]} variant="ghost" size="icon" aria-label="Menu">
								<Menu />
							</Button>
						</Sheet.Trigger>
						<Sheet.Content class="flex h-full flex-col">
							<Sheet.Header>
								<Sheet.Title>Menu</Sheet.Title>
							</Sheet.Header>
							<div class="flex-grow">
								<!-- Menu content goes here -->
							</div>
							<Sheet.Footer>
								{#if session}
									<form class="w-full" method="POST" action="/auth?/signout">
										<Button class="w-full" variant="secondary" type="submit">Sign out</Button>
									</form>
								{:else}
									<div class="flex w-full flex-col space-y-1">
										<Button href="/auth/login" variant="secondary" size="sm">Log in</Button>
										<Button href="/auth/signup" size="sm">Sign up</Button>
									</div>
								{/if}
							</Sheet.Footer>
						</Sheet.Content>
					</Sheet.Root>
				</div>
			</div>
		</div>
	</nav>
</Navbar>
