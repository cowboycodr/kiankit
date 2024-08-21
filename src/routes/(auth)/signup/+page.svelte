<script>
	import { BrandedSplitScreen } from '$layouts';

	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
	import { Logo } from '$components/navbar';
	import { Separator } from '$ui/separator';

	import BasicAuth from '../(ui)/basic-auth.svelte';
	import OAuth from '../(ui)/oauth.svelte';

	export let data;
</script>

<BrandedSplitScreen>
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
			<a class="underline" href="/login">Already have an account?</a>
		</Card.Description>
	</div>
</BrandedSplitScreen>
