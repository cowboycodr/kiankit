<script>
	import { SplitScreen } from '$layouts';

	import Fa from 'svelte-fa';
	import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
</script>

<SplitScreen>
	<div slot="left">
			<h1 class="text-3xl font-semibold">KianKit</h1>
			<p class="text-muted-foreground">Rapidly build SvelteKit + Supabase apps.</p>
	</div>
	<div class="w-full max-w-96 space-y-3" slot="right">
		<div class="text-center block md:hidden">
			<h1 class="text-3xl font-semibold">KianKit</h1>
			<p class="text-muted-foreground">Rapidly build SvelteKit + Supabase apps.</p>
		</div>
		<Card.Root>
			<Card.Header>
				<Card.Title>Sign in</Card.Title>
				<Card.Description>This will only take a few moments.</Card.Description>
			</Card.Header>
			<Card.Content>
				<div class="space-y-2">
					<Button variant="secondary" class="w-full space-x-1">
						<span>
							<Fa icon={faGoogle} />
						</span>
						<span>Google</span>
					</Button>
					<Button variant="secondary" class="w-full space-x-1" disabled>
						<span>
							<Fa icon={faGithub} />
						</span>
						<span>Github</span>
					</Button>
				</div>
			</Card.Content>
			<Card.Footer>
				<Card.Description>More ways to sign in coming soon.</Card.Description>
			</Card.Footer>
		</Card.Root>
	</div>
	<div slot="description">
		<Card.Description class="text-center">
			This is a <a class="underline" href="https://github.com/cowboycodr/KianKit">KianKit</a> demo page.
		</Card.Description>
	</div>
</SplitScreen>
