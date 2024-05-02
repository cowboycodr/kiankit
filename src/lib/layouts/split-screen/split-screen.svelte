<div class="flex min-h-screen">
	<div class="flex w-full items-center justify-center p-2">
		<div class="w-full max-w-96">
			<slot name="left" />
		</div>
	</div>
	<div class="flex w-full items-center justify-center bg-accent p-2">
		<div class="w-full max-w-96">
			<slot name="right" />
		</div>
	</div>
	<div class="absolute bottom-5 left-1/2 -translate-x-1/2 transform">
		<slot name="description" />
	</div>
</div>
