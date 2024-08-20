<script>
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Loader2 from 'lucide-svelte/icons/loader-circle';

	import { authSchema } from '$lib/schemas';
	import * as Form from '$ui/form';
	import { Input } from '$ui/input';

	export let data;

	let loading = false;

	const form = superForm(data, {
		validators: zodClient(authSchema),
		onSubmit: () => {
			loading = true;
		},
		onResult: () => {
			loading = false;
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<div class="space-y-2">
		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>Password</Form.Label>
				<Input {...attrs} placeholder="New password" bind:value={$formData.password} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button class="w-full items-center space-x-1" type="submit" disabled={loading}>
			{#if loading}
				<Loader2 class="h-[1.2rem] w-[1.2rem] animate-spin" />
			{/if}
			<span> Reset </span>
		</Form.Button>
	</div>
</form>
