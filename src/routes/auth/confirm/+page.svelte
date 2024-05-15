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
	<div slot="right" class="text-center text-balance lg:text-left lg:text-wrap w-full max-w-lg space-y-3">
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
