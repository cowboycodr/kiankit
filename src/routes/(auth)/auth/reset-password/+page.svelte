<script>
	import { BrandedSplitScreen } from '$layouts';
	import * as Card from '$ui/card';

	import Form from './form.svelte';

	export let data;
</script>

<BrandedSplitScreen>
	<Card.Root>
		<Card.Header>
			<Card.Title>Reset password</Card.Title>
			<Card.Description>This will only take a few moments.</Card.Description>
		</Card.Header>
		<Card.Content class="space-y-3 lg:space-y-5">
			<Form data={data.form} />
		</Card.Content>
	</Card.Root>
</BrandedSplitScreen>
