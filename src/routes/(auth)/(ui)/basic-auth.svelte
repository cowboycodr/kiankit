<script>
	import { page } from '$app/stores';

	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { toast } from 'svelte-sonner';
	import { Loader2 } from 'lucide-svelte';

	import { authSchema } from '$lib/schemas';

	import * as Form from '$ui/form';
	import { Input } from '$ui/input';

	export let type = 'signup';
	export let data;

	$: action = type === 'signup' ? '/auth?/signUp' : '/auth?/login';

	const redirectUrl = $page.url.searchParams.get('r');
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

<form method="POST" {action} use:enhance>
	<input type="hidden" name="redirectUrl" value={redirectUrl} />
	<div class="space-y-2">
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>Email</Form.Label>
				<Input {...attrs} placeholder="john@example.com" bind:value={$formData.email}></Input>
			</Form.Control>
			<Form.FieldErrors let:errors let:errorAttrs>
				{#each errors as error}
					{#if error === 'Email not confirmed'}
						<div {...errorAttrs}>
							<button
								on:submit={() => {
									toast.success('Confirmation email sent successfully');
								}}
								type="submit"
								formaction="/auth?/resendConfirmation"
								class="text-left"
							>
								Email not confirmed. <span class="underline">Need another confirmation email?</span>
							</button>
						</div>
					{:else}
						<div {...errorAttrs}>{error}</div>
					{/if}
				{/each}
			</Form.FieldErrors>
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
		<div class="text-center">
			<a href="/auth/forgot-password" class="text-sm text-muted-foreground underline"
				>Forgot your password?</a
			>
		</div>
	</div>
</form>
