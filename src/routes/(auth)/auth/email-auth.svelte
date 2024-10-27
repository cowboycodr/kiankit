<script lang="ts">
	import { superForm, type SuperValidated } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { toast } from 'svelte-sonner';
	import LoaderCircleIcon from 'lucide-svelte/icons/loader-circle';
	import EmailIcon from 'lucide-svelte/icons/mail';

	import * as Form from '@/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { type EmailAuthSchema, emailAuthSchema } from '@/schemas';

	interface Props {
		form: SuperValidated<EmailAuthSchema>;
	}

	let { form: formValidator }: Props = $props();

	let loading = $state(false);

	const form = superForm(formValidator, {
		validators: zodClient(emailAuthSchema),
		onSubmit: () => {
			loading = true;
		},
		onResult: () => {
			loading = false;
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" action="/auth?/email" class="space-y-2" use:enhance>
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ attrs })}
				<Form.Label>Email</Form.Label>
				<Input {...attrs} placeholder="Email address" bind:value={$formData.email} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button class="w-full items-center space-x-1" type="submit" disabled={loading}>
		{#if loading}
			<LoaderCircleIcon class="animate-spin" size="16" />
		{:else}
			<EmailIcon size="16" />
		{/if}
		<span>Continue with Email</span>
	</Form.Button>
</form>
