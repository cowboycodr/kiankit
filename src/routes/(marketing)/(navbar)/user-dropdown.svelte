<script>
	import { Button } from '$ui/button';
	import * as Dropdown from '$ui/dropdown-menu';

	import UserIcon from 'lucide-svelte/icons/user';
	import LogOutIcon from 'lucide-svelte/icons/log-out';
</script>

<Dropdown.Root>
	<Dropdown.Trigger let:builder asChild>
		<Button builders={[builder]} size="icon-sm" variant="ghost" class="space-x-1">
			<UserIcon />
		</Button>
	</Dropdown.Trigger>
	<Dropdown.Content class="min-w-48">
		<Dropdown.Group>
			<form class="contents" method="POST" action="/auth?/logOut">
				<button class="contents" type="submit">
					<Dropdown.Item class="flex cursor-pointer space-x-2">
						<LogOutIcon class="h-[1.2rem] w-[1.2rem]" />
						<span> Log out </span>
					</Dropdown.Item>
				</button>
			</form>
		</Dropdown.Group>
	</Dropdown.Content>
</Dropdown.Root>
