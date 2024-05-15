<script>
	import { SplitScreen } from '$layouts';

	import { ArrowLeft } from 'lucide-svelte';

	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
	import { Logo } from '$components/header';
	import { Separator } from '$ui/separator';

	import BasicAuth from './basic-auth.svelte';
	import OAuth from './oauth.svelte';

	export let data;
</script>

<svelte:head>
	<title>KianKit - Rapidly build SvelteKit + Supabase apps.</title>
</svelte:head>

<div class="fixed left-3 top-3 z-50">
	<Button
		class="rounded-full text-muted-foreground"
		variant="ghost"
		size="icon"
		on:click={() => {
			window.history.go(-1);
		}}
	>
		<ArrowLeft />
	</Button>
</div>

<SplitScreen>
	<div slot="left" class="flex items-center justify-center">
		<Logo size="xl" />
	</div>
	<div class="w-full max-w-96 space-y-3" slot="right">
		<div class="flex w-full justify-center lg:hidden">
			<Logo size="lg" />
		</div>
		<Card.Root>
			<Card.Header>
				<Card.Title>Sign in</Card.Title>
				<Card.Description>This will only take a few moments.</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-3 lg:space-y-5">
				<BasicAuth data={data.form} />
				<Separator />
				<OAuth />
			</Card.Content>
			<Card.Footer>
				<Card.Description>More ways to sign in coming soon.</Card.Description>
			</Card.Footer>
		</Card.Root>
		<div class="flex w-full justify-center lg:hidden">
			<Card.Description>
				This is a <a class="underline" href="https://github.com/cowboycodr/KianKit">KianKit</a> demo
				page.
			</Card.Description>
		</div>
	</div>
</SplitScreen>

<div class="absolute bottom-5 hidden w-full justify-center lg:flex">
	<Card.Description>
		This is a <a class="underline" href="https://github.com/cowboycodr/KianKit">KianKit</a> demo page.
	</Card.Description>
</div>
