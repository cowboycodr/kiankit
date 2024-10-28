<script lang="ts">
	import { type Snippet } from 'svelte';

	import Navbar from './components/navbar.svelte';
	import Footer from './components/footer.svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="min-h-dvh">
	<Navbar />
	{@render children?.()}
</div>

<Footer />
