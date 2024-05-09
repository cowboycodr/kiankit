<div class="flex h-screen min-h-[400px]">
	<div class="hidden w-full items-center justify-center p-3 lg:flex">
		<div class="w-full max-w-96">
			<slot name="left" />
		</div>
	</div>
	<div class="flex w-full items-center justify-center bg-accent p-3">
		<slot name="right"></slot>
	</div>
	{#if $$slots.description}
		<div class="fixed bottom-5 left-1/2 -translate-x-1/2 transform">
			<slot name="description" />
		</div>
	{/if}
</div>
