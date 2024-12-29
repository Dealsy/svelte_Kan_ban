<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { workspace } = data;
</script>

<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
	<div class="px-4 sm:px-0">
		<div class="mb-8">
			<h1 class="text-2xl font-semibold text-gray-900">{workspace.name}</h1>
			{#if workspace.description}
				<p class="mt-2 text-gray-600">{workspace.description}</p>
			{/if}
		</div>

		<!-- Projects will go here later -->
		<div class="rounded-lg border-4 border-dashed border-gray-200 p-4">
			<p class="text-center text-gray-500">No projects yet</p>
		</div>
	</div>
</div>
