<script lang="ts">
	import type { Workspace } from '$lib/types';

	export let workspaces: Workspace[] = [];
</script>

<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each workspaces as workspace}
		<div class="group relative rounded-lg border p-6 hover:shadow-md">
			<h3 class="text-lg font-semibold text-gray-900">
				<a href="/workspace/{workspace.id}" class="focus:outline-none">
					<span class="absolute inset-0" aria-hidden="true" />
					{workspace.name}
				</a>
			</h3>
			<p class="mt-2 text-sm text-gray-500">
				{workspace.description || 'No description provided'}
			</p>
		</div>
	{/each}

	<!-- Create New Workspace Card -->
	<button
		class="group relative flex items-center justify-center rounded-lg border border-dashed p-6 hover:border-gray-400"
		onclick={() => (window.location.href = '/workspace/new')}
	>
		<div class="text-center">
			<svg
				class="mx-auto h-12 w-12 text-gray-400 group-hover:text-gray-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
			</svg>
			<h3 class="mt-2 text-sm font-semibold text-gray-900">Create new workspace</h3>
			<p class="mt-1 text-sm text-gray-500">Get started with a new workspace</p>
		</div>
	</button>
</div>
