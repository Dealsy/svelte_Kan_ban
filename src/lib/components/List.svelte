<script lang="ts">
	type Item = {
		id: number;
		name: string;
	};

	export let items: Item[] = [];
</script>

<ul>
	{#each items as item}
		<li>
			<slot {item} index={items.indexOf(item)}>
				<!-- Default rendering if no slot content provided -->
				{item.name}
			</slot>
		</li>
	{/each}
</ul>
