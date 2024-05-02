<div class="flex min-h-screen">
	<div class="hidden w-full items-center justify-center p-3 md:flex">
		<div class="w-full max-w-96">
			<slot name="left" />
		</div>
	</div>
	<div class="flex w-full items-center justify-center bg-accent p-3">
		<div class="w-full max-w-96 space-y-3">
			<div class="flex justify-center text-center md:hidden">
				<slot name="left" />
			</div>
			<slot name="right" />
		</div>
	</div>
	<div class="absolute bottom-5 left-1/2 -translate-x-1/2 transform">
		<slot name="description" />
	</div>
</div>
