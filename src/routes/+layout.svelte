<script>
	import '../app.pcss';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';

	import extend from 'just-extend';
	import { Toaster } from 'svelte-sonner';
	import { MetaTags } from 'svelte-meta-tags';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	$: metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);

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

<MetaTags {...metaTags} />

<slot />
