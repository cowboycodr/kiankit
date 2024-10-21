<script lang="ts">
	import { run } from 'svelte/legacy';

	import ArrowLeftIcon from 'lucide-svelte/icons/arrow-left';

	import { historyBack } from '@/components/actions';
	import { BrandedSplitScreen } from '@/components/layouts';
	import { buttonVariants } from '@/components/ui/button';
	import { cn } from '@/utils';

	import AuthForm from '../auth/auth-form.svelte';

	interface Props {
		data: any;
	}

	let { data }: Props = $props();
	let { method, emailAuthForm } = $state(data);
	run(() => {
		({ method, emailAuthForm } = data);
	});
</script>

<div class="absolute left-3 top-3 z-50">
	<button
		class={cn(
			buttonVariants({ variant: 'ghost', size: 'icon' }),
			'rounded-full text-muted-foreground'
		)}
		use:historyBack
	>
		<ArrowLeftIcon />
	</button>
</div>

<BrandedSplitScreen>
	<AuthForm {method} form={emailAuthForm} />
</BrandedSplitScreen>
