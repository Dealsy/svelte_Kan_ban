<script lang="ts">
	import WorkspaceForm from '$lib/components/workspace/WorkspaceForm.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
	<div class="px-4 py-6 sm:px-0">
		<div class="mb-8">
			<h1 class="text-2xl font-semibold text-gray-900">Create New Workspace</h1>
			<p class="mt-2 text-sm text-gray-600">Get started by creating a new workspace.</p>
		</div>

		<div class="max-w-md">
			<WorkspaceForm {form} />
		</div>
	</div>
</div>
