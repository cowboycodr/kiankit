<script>
	import { goto } from '$app/navigation';

	import { ArrowLeft } from 'lucide-svelte';

	import { SplitScreen } from '$layouts/split-screen';
	import { Logo } from '$components/navbar';

	import { Button } from '$ui/button';

	export let data;
	let { message, instructions } = data;
</script>

<div class="fixed left-3 top-3 z-50">
	<Button
		class="rounded-full text-muted-foreground"
		variant="ghost"
		size="icon"
		on:click={async () => {
			await goto('/');
		}}
	>
		<ArrowLeft />
	</Button>
</div>

<SplitScreen>
	<div slot="left" class="flex items-center justify-center">
		<Logo class="h-36 w-36" />
	</div>
	<div
		slot="right"
		class="w-full max-w-lg space-y-3 text-balance text-center lg:text-wrap lg:text-left"
	>
		<div class="flex w-full justify-center lg:hidden">
			<Logo class="h-16 w-16" />
		</div>
		<div>
			<h1 class="text-3xl font-semibold">
				{message}
			</h1>
			<p class="text-lg text-muted-foreground">
				{instructions}
			</p>
			<div class="flex items-center justify-center space-x-3 lg:justify-normal">
				<Button href="/login" class="p-0 text-lg lg:text-base" variant="link">Go to log in</Button>
			</div>
		</div>
	</div>
</SplitScreen>
