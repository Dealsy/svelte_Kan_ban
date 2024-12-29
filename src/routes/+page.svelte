<script lang="ts">
	import WorkspaceList from '$lib/components/workspace/WorkspaceList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
	<div class="px-4 sm:px-0">
		<h1 class="mb-8 text-2xl font-semibold text-gray-900">Your Workspaces</h1>
		<WorkspaceList workspaces={data.workspaces} />
	</div>
</div>
