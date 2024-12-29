<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen bg-gray-50">
	<nav class="bg-white shadow-sm">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="flex-shrink-0">
					<span class="text-xl font-bold text-indigo-600">ClickUp Clone</span>
				</div>
				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					<a
						href="/"
						class="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-gray-900"
					>
						Dashboard
					</a>
				</div>
			</div>
		</div>
	</nav>

	<main>
		<slot />
	</main>
</div>
