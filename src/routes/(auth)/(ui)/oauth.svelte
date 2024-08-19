<script>
	import { page } from '$app/stores';

	import Fa from 'svelte-fa';
	import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

	import { Button } from '$ui/button';

	export let type = 'signup';

	$: action = type === 'signup' ? '/auth?/signUp' : '/auth?/login';

	const redirectUrl = $page.url.searchParams.get('r');
</script>

<form method="POST" {action}>
	<input type="hidden" name="redirectUrl" value={redirectUrl} />
	<div class="space-y-2">
		<Button class="w-full space-x-1" variant="secondary" type="submit" name="method" value="google">
			<span>
				<Fa icon={faGoogle} />
			</span>
			<span>Google</span>
		</Button>
		<Button class="w-full space-x-1" variant="secondary" type="submit" name="method" value="github">
			<span>
				<Fa icon={faGithub} />
			</span>
			<span>Github</span>
		</Button>
	</div>
</form>
