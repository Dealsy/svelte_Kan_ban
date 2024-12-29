<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	export let form: any = null;

	function handleEnhance() {
		return async ({ result }) => {
			if (result.data?.success) {
				window.location.href = result.data.url;
			}
		};
	}
</script>

<form method="POST" class="space-y-6" use:enhance={handleEnhance}>
	<div>
		<label for="name" class="block text-sm font-medium text-gray-700">Workspace Name</label>
		<input
			type="text"
			name="name"
			id="name"
			required
			class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
		/>
	</div>

	<div>
		<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
		<textarea
			name="description"
			id="description"
			rows="3"
			class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
		></textarea>
	</div>

	{#if form?.error}
		<p class="text-sm text-red-500">{form.error}</p>
	{/if}

	<button
		type="submit"
		class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
	>
		Create Workspace
	</button>
</form>
