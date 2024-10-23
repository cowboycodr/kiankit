<script lang="ts">
	import { Logo } from '@/components/logo';
	import { SplitScreen } from '.';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<SplitScreen>
	{#snippet left()}
		<div class="w-full max-w-96 space-y-3">
			<div class="flex w-full justify-center lg:hidden">
				<Logo size="lg" />
			</div>
			{@render children?.()}
		</div>
	{/snippet}
	{#snippet right()}
		<div class="flex items-center justify-center">
			<Logo size="xl" />
		</div>
	{/snippet}
</SplitScreen>
