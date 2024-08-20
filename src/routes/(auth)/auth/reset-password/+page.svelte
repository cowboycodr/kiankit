<script>
	import { SplitScreen } from '$layouts';
	import { Logo } from '$components/navbar';
	import * as Card from '$ui/card';

	import Form from './form.svelte';

	export let data;
</script>

<SplitScreen>
	<div slot="left" class="flex items-center justify-center">
		<Logo class="h-36 w-36" />
	</div>
	<div slot="right" class="w-full max-w-96 space-y-3">
		<div class="flex w-full justify-center lg:hidden">
			<Logo class="h-16 w-16" />
		</div>
		<Card.Root>
			<Card.Header>
				<Card.Title>Reset password</Card.Title>
				<Card.Description>This will only take a few moments.</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-3 lg:space-y-5">
				<Form data={data.form} />
			</Card.Content>
		</Card.Root>
	</div>
</SplitScreen>
