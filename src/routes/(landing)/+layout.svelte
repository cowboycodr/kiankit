<script>
	import Navbar from './components/navbar.svelte';
	import Footer from './components/footer.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="min-h-dvh">
	<Navbar />
	{@render children?.()}
</div>

<Footer />
