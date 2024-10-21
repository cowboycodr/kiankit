<script lang="ts">
	import Navbar from './components/navbar.svelte';
	import Footer from './components/footer.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="min-h-dvh">
	<Navbar />
	{@render children?.()}
</div>

<Footer />
