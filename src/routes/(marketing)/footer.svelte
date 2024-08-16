<script>
	import { Logo } from '$components/navbar';
    import { Button } from '$ui/button';

	import ThemeToggle from './(navbar)/theme-toggle.svelte';
</script>

<div class="min-h-16 w-full bg-muted">
	<div class="container max-w-[1024px] py-8 space-y-3 text-foreground/70">
		<div class="flex w-full items-center justify-between">
            <div class="flex space-x-1 items-center">
                <Logo class="h-5 w-5" />
                <span class="text-sm">
                    © 2024
                </span>
            </div>
			<ThemeToggle />
		</div>
	</div>
</div>
