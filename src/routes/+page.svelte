<script>
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	import { User } from 'lucide-svelte';

	import { Header, Logo } from '$components/header';
	import { Button } from '$ui/button';
	import * as Dropdown from '$ui/dropdown-menu';

	export let data;
	let { session } = data;
	$: ({ session } = data);
</script>

<svelte:head>
	<title>KianKit</title>
</svelte:head>

<Header>
	<div class="flex justify-between">
		<div class="flex items-center">
			<div class="flex items-center space-x-1">
				<Logo />
				<h3 class="text-xl font-semibold">KianKit</h3>
			</div>
			<div class="px-2">
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
				<div>
					<Dropdown.Root>
						<Dropdown.Trigger asChild let:builder>
							<Button builders={[builder]} class="space-x-1" variant="link" size="sm">
								<div>
									<User />
								</div>
								<div>Profile</div>
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
				<div>
					<Button href="/auth" variant="secondary" size="sm">Log in</Button>
					<Button href="/auth" size="sm">Sign up</Button>
				</div>
			{/if}
		</div>
	</div>
</Header>
