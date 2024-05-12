<script>
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	import { User } from 'lucide-svelte';

	import { Header, Logo } from '$components/header';
	import { Button } from '$ui/button';

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
					class="flex space-x-1"
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
					<Button href="/account" variant="link" size="icon">
						<User />
					</Button>
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
