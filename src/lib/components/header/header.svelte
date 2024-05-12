<script>
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	import { Menu } from 'lucide-svelte';

	import { Button } from '$ui/button';
	import * as Drawer from '$ui/drawer';

	import Logo from './logo.svelte';
</script>

<header class="fixed left-0 right-0 top-0 border-b border-accent">
	<nav class="container flex items-center justify-between px-2 py-2">
		<div class="flex items-center">
			<div class="flex items-center">
				<Logo />
				<h3 class="text-xl font-semibold">KianKit</h3>
			</div>
			<div class="px-2">
                <Button class="flex space-x-1" variant="link" size="sm">
                    <div>
                        <Fa size="lg" icon={faGithub} />
                    </div>
                    <span class="hidden md:block">Github</span>
                </Button>
			</div>
		</div>
		<div class="flex space-x-1">
			<div>
				<Button href="/auth" variant="secondary" size="sm">Log in</Button>
				<Button href="/auth" size="sm">Sign up</Button>
			</div>
		</div>
	</nav>
</header>
