<script lang="ts">
	export let task: {
		id: string;
		title: string;
		status: string;
	};
</script>

<div class="card rounded-lg border p-4">
	<header class="mb-4">
		<slot name="header" {task}>
			<h3 class="text-lg font-bold">{task.title}</h3>
		</slot>
	</header>

	<div class="content">
		<slot {task} />
	</div>

	{#if $$slots.footer}
		<footer class="mt-4 border-t pt-4">
			<slot name="footer" {task} />
		</footer>
	{/if}
</div>
