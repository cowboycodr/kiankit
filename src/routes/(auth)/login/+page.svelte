<script>
	import { BrandedSplitScreen } from '$layouts';

	import * as Card from '$ui/card';
	import { Separator } from '$ui/separator';

	import BasicAuth from '../(ui)/basic-auth.svelte';
	import OAuth from '../(ui)/oauth.svelte';

	export let data;
</script>

<BrandedSplitScreen>
	<Card.Root>
		<Card.Header>
			<Card.Title>Log in</Card.Title>
			<Card.Description>This will only take a few moments.</Card.Description>
		</Card.Header>
		<Card.Content class="space-y-3 lg:space-y-5">
			<BasicAuth type="login" data={data.form} />
			<Separator />
			<OAuth type="login" />
		</Card.Content>
	</Card.Root>
	<div class="flex w-full justify-center">
		<Card.Description>
			<a class="underline" href="/signup">Don't have an account?</a>
		</Card.Description>
	</div>
</BrandedSplitScreen>
