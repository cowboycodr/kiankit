<div class="relative flex min-h-dvh">
	<div class="flex w-full items-center justify-center bg-secondary p-3">
		<slot name="left"></slot>
	</div>
	<div class="hidden w-full items-center justify-center p-3 lg:flex">
		<slot name="right" />
	</div>
</div>
