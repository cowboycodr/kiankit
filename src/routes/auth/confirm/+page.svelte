<script>
	import { SplitScreen } from '$layouts/split-screen';
	import { Logo } from '$components/header';

	export let data;
	let { message, instructions } = data;
</script>

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
		</div>
	</div>
</SplitScreen>
