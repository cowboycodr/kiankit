<script lang="ts">
	import { BrandedSplitScreen } from '@/components/layouts';
	import AuthForm from '../auth/auth-form.svelte';

	export let data;
	let { method, emailAuthForm } = data;
	$: ({ method, emailAuthForm } = data);
</script>

<BrandedSplitScreen>
	<AuthForm {method} form={emailAuthForm} />
</BrandedSplitScreen>
