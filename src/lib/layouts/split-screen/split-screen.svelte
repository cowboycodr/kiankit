<div class="relative flex min-h-dvh">
	<div class="flex w-full items-center justify-center bg-accent p-3">
		<slot name="right"></slot>
	</div>
	<div class="hidden w-full items-center justify-center p-3 lg:flex">
		<slot name="left" />
	</div>
</div>
