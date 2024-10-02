<script lang="ts">
	import { Logo } from '@/components/logo';
	import { SplitScreen } from '.';
</script>

<SplitScreen>
	<svelte:fragment slot="left">
		<div class="w-full max-w-96 space-y-3">
			<div class="flex w-full justify-center lg:hidden">
				<Logo size="lg" />
			</div>
			<slot />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="right">
		<div class="flex items-center justify-center">
			<Logo size="xl" />
		</div>
	</svelte:fragment>
</SplitScreen>
