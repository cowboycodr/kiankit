<script>
	import { Logo } from '@/components/logo';
	import { Center } from '@/components/layouts';
</script>

<Center>
	<div class="min-h-dvh w-full max-w-md space-y-3 py-16 md:min-h-0 md:text-center">
		<div class="flex w-full md:justify-center">
			<Logo size="lg" class="hidden md:block" />
			<Logo size="md" class="md:hidden" />
		</div>
		<h1 class="text-3xl font-medium tracking-tighter md:text-4xl">We have a message for you.</h1>
		<p class="text-lg text-muted-foreground">
			Check your email inbox for a message from us. Click the link that is attached.
		</p>
	</div>
</Center>
