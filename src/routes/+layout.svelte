<script lang="ts">
	import '../app.pcss';

	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from 'svelte-sonner';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<ModeWatcher defaultMode="system" />
<Toaster position="top-center" />

<slot />
