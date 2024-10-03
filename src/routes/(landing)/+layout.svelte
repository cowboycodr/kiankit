<script>
	import Navbar from './navbar.svelte';
	import Footer from './footer.svelte';
</script>

<div class="min-h-dvh">
	<Navbar />
	<slot />
</div>

<Footer />
