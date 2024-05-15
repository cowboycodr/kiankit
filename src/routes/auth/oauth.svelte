<script>
	import Fa from 'svelte-fa';
	import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

	import { Button } from '$ui/button';
</script>

<form method="POST" action="/auth?/signin">
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
