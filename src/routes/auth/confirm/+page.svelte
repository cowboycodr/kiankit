<script>
	import { ArrowLeft } from 'lucide-svelte';

	import { SplitScreen } from '$layouts/split-screen';
	import { Logo } from '$components/navbar';

	import { Button } from '$ui/button';

	export let data;
	let { message, instructions } = data;
</script>

<svelte:head>
	<title>Confirmation - KianKit</title>
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
	<div
		slot="right"
		class="w-full max-w-lg space-y-3 text-balance text-center lg:text-wrap lg:text-left"
	>
		<div class="flex w-full justify-center lg:hidden">
			<Logo size="lg" />
		</div>
		<div>
			<h1 class="text-3xl font-semibold">
				{message}
			</h1>
			<p class="text-lg text-muted-foreground">
				{instructions}
			</p>
			<div class="flex items-center justify-center space-x-3 lg:justify-normal">
				<Button href="/auth/login" class="p-0 text-lg lg:text-base" variant="link">
					Go to log in
				</Button>
			</div>
		</div>
	</div>
</SplitScreen>
