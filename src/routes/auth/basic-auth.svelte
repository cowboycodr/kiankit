<script>
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { schema as authSchema } from '$lib/auth';

	import * as Form from '$ui/form';
	import { Input } from '$ui/input';

	export let action = '/auth?/signup';
	export let data;

	const form = superForm(data, {
		validators: zodClient(authSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" {action} use:enhance>
	<div class="space-y-2">
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>Email</Form.Label>
				<Input {...attrs} placeholder="john@example.com" bind:value={$formData.email}></Input>
			</Form.Control>
		</Form.Field>
		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>Password</Form.Label>
				<Input {...attrs} type="password" placeholder="Password" bind:value={$formData.password}
				></Input>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<input type="hidden" name="method" value="email" />
		<Form.Button class="w-full" type="submit">Sign up</Form.Button>
	</div>
</form>
