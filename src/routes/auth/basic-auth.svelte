<script>
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { Loader2 } from 'lucide-svelte';

	import { schema as authSchema } from '$lib/auth';

	import * as Form from '$ui/form';
	import { Input } from '$ui/input';

	export let type = 'signup';
	export let data;

	$: action = type ? 'signup' === '/auth?/signup' : '/auth?/login';

	let loading = false;

	const form = superForm(data, {
		validators: zodClient(authSchema),
		onSubmit: () => {
			loading = true;
		},
		onResponse: () => {
			loading = false;
		},
		onError: ({ result, message }) => {
			loading = false;
			console.log('errors');
			console.log({ result, message });
		}
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
			<Form.FieldErrors />
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
		<Form.Button class="w-full items-center space-x-1" type="submit" disabled={loading}>
			{#if loading}
				<Loader2 class="animate-spin" size="16" />
			{/if}
			<span> {type === 'signup' ? 'Sign up' : 'Log in'} </span>
		</Form.Button>
	</div>
</form>
