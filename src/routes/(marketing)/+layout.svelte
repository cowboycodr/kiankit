<script>
	import Navbar from './(navbar)/navbar.svelte';
	import Footer from './footer.svelte';
</script>

<Navbar />

<div class="min-h-dvh">
	<slot />
</div>

<Footer />
