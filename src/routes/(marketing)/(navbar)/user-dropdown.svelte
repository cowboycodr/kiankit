<script>
	import { Button } from '$ui/button';
	import * as Dropdown from '$ui/dropdown-menu';

	import UserIcon from 'lucide-svelte/icons/user';
</script>

<Dropdown.Root>
	<Dropdown.Trigger let:builder asChild>
		<Button builders={[builder]} size="icon-sm" variant="ghost" class="space-x-1">
			<UserIcon />
		</Button>
	</Dropdown.Trigger>
	<Dropdown.Content class="min-w-48">
		<Dropdown.Group>
			<form class="contents" method="POST" action="/auth?/signout">
				<button class="contents" type="submit">
					<Dropdown.Item class="cursor-pointer">Sign out</Dropdown.Item>
				</button>
			</form>
		</Dropdown.Group>
	</Dropdown.Content>
</Dropdown.Root>
