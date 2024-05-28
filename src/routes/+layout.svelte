<script>
	import '../app.pcss';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import { Toaster } from 'svelte-sonner';

	import { Meta } from '$components/meta';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Toaster position="top-center" />

<Meta
	title="KianKit"
	description="Rapidly build SvelteKit + Supabase apps."
	twitterUsername="@fromkian"
	image="https://pub-0ad6faf4526b463d9367cf8b6e642b7c.r2.dev/kiankit-og.png"
/>

<slot />
