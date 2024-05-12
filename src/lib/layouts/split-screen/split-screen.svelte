<div class="relative flex h-screen min-h-[500px]">
	<div class="hidden w-full items-center justify-center p-3 lg:flex">
		<div class="w-full max-w-96">
			<slot name="left" />
		</div>
	</div>
	<div class="flex w-full items-center justify-center bg-accent p-3">
		<slot name="right"></slot>
	</div>
</div>
