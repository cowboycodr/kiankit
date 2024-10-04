<script>
	import Navbar from './components/navbar.svelte';
	import Footer from './components/footer.svelte';
</script>

<div class="min-h-dvh">
	<Navbar />
	<slot />
</div>

<Footer />
