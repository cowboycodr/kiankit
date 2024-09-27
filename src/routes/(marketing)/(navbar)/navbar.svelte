<script lang="ts">
	import { Navbar } from '$components/navbar';

	import Brand from './brand.svelte';
	import Menu from './menu.svelte';

	let scrollY: number;
</script>

<svelte:window bind:scrollY />

<Navbar class={scrollY > 0 ? 'border-b bg-none' : 'border-b-0 bg-background'}>
	<nav class="container w-full max-w-[1024px] py-4">
		<div class="flex space-x-5">
			<Brand />
			<Menu />
		</div>
	</nav>
</Navbar>
