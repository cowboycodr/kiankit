<script lang="ts">
	import { Logo } from '@/components/logo';
</script>

<div class="flex h-9 w-full items-center space-x-3 md:w-auto">
	<div class="hidden md:contents">
		<Logo size="md" />
	</div>
	<div class="contents md:hidden">
		<Logo size="md" />
	</div>
	<div class="hidden text-nowrap text-lg font-medium md:block">Acme</div>
</div>
