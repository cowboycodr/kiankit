<script>
	import { SplitScreen } from '$layouts';

	import { ArrowLeft } from 'lucide-svelte';

	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
	import { Logo } from '$components/navbar';
	import { Separator } from '$ui/separator';

	import BasicAuth from '../basic-auth.svelte';
	import OAuth from '../oauth.svelte';

	export let data;
</script>

<svelte:head>
	<title>Sign up - KianKit</title>
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
				<Card.Title>Sign up</Card.Title>
				<Card.Description>This will only take a few moments.</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-3 lg:space-y-5">
				<BasicAuth type="signup" data={data.form} />
				<Separator />
				<OAuth type="signup" />
			</Card.Content>
		</Card.Root>
		<div class="flex w-full justify-center">
			<Card.Description>
				<a class="underline" href="/auth/login">Already have an account?</a>
			</Card.Description>
		</div>
	</div>
</SplitScreen>
