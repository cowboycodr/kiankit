<script>
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	import { Menu, User, ChevronDown } from 'lucide-svelte';

	import { Header, Logo } from '$components/header';
	import { Button } from '$ui/button';
	import * as Dropdown from '$ui/dropdown-menu';
	import * as Sheet from '$ui/sheet';
	import * as Collapsible from '$ui/collapsible';

	export let data;
	let { session } = data;
	$: ({ session } = data);
</script>

<svelte:head>
	<title>KianKit</title>
</svelte:head>

<Header>
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
					<div class="hidden lg:block">
						<Button href="/auth" variant="secondary" size="sm">Log in</Button>
						<Button href="/auth" size="sm">Sign up</Button>
					</div>
				{/if}
				<div class="md:hidden">
					<Sheet.Root>
						<Sheet.Trigger asChild let:builder>
							<Button builders={[builder]} variant="ghost" size="icon">
								<Menu />
							</Button>
						</Sheet.Trigger>
						<Sheet.Content class="flex h-full flex-col">
							<Sheet.Header>
								<Sheet.Title>Menu</Sheet.Title>
							</Sheet.Header>
							<div class="flex-grow">
								<Collapsible.Root>
									<Collapsible.Trigger asChild let:builder>
										<Button
											class="w-full items-center space-x-1"
											variant="ghost"
											builders={[builder]}
										>
											<span> Resources </span>
											<ChevronDown size="16" />
										</Button>
									</Collapsible.Trigger>
									<Collapsible.Content class="text-center">
										<Button
											class="space-x-1"
											href="https://github.com/cowboycodr/KianKit"
											variant="link"
											size="sm"
											target="_blank"
										>
											<span>
												<Fa size="lg" icon={faGithub} />
											</span>
											<span>Github</span>
										</Button>
									</Collapsible.Content>
								</Collapsible.Root>
							</div>
							<Sheet.Footer>
								{#if session}
									<form class="w-full" method="POST" action="/auth?/signout">
										<Button class="w-full" variant="secondary" type="submit">Sign out</Button>
									</form>
								{:else}
									<div class="flex w-full flex-col space-y-1">
										<Button href="/auth" variant="secondary" size="sm">Log in</Button>
										<Button href="/auth" size="sm">Sign up</Button>
									</div>
								{/if}
							</Sheet.Footer>
						</Sheet.Content>
					</Sheet.Root>
				</div>
			</div>
		</div>
	</nav>
</Header>

<div class="container">
	<section
		class="flex flex-col items-center space-y-2 py-8 pb-8 text-center md:py-12 md:pb-8 lg:py-24 lg:pb-20"
	>
		<h1 class="text-balance text-3xl font-semibold tracking-tighter md:text-6xl lg:leading-[1.1]">
			Build apps without re-inventing the wheel
		</h1>
		<p class="max-w-[750px] text-balance text-lg text-muted-foreground sm:text-xl">
			Accelerate your development with KianKit's pre-configured setup for SvelteKit and Supabase.
		</p>
		<div class="flex space-x-3 py-4">
			<Button href="/auth">Get Started</Button>
			<Button href="https://github.com/cowboycodr/KianKit" class="flex space-x-2" variant="outline">
				<span>
					<Fa icon={faGithub} />
				</span>
				<span> GitHub </span>
			</Button>
		</div>
	</section>
</div>
