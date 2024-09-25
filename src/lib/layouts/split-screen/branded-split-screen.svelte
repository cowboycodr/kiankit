<script lang="ts">
	import { goto } from '$app/navigation';

	import { ArrowLeft } from 'lucide-svelte';

	import { SplitScreen } from '$layouts/split-screen';
	import { Logo } from '$components/navbar';

	import { Button } from '$ui/button';
</script>

<div class="fixed left-3 top-3 z-50">
	<Button
		class="rounded-full text-muted-foreground"
		variant="ghost"
		size="icon"
		on:click={async () => {
			await goto('/');
		}}
	>
		<ArrowLeft />
	</Button>
</div>

<SplitScreen>
	<div slot="left" class="flex items-center justify-center">
		<Logo class="h-36 w-36" />
	</div>
	<div class="w-full max-w-96 space-y-3" slot="right">
		<div class="flex w-full justify-center lg:hidden">
			<Logo class="h-16 w-16" />
		</div>
		<slot />
	</div>
</SplitScreen>
