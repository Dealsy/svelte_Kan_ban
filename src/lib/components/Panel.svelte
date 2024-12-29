<div class="panel">
	<header class="panel-header">
		<slot name="header">
			<!-- Default content if no header is provided -->
			<h2>Default Header</h2>
		</slot>
	</header>

	<main class="panel-content">
		<slot />
	</main>

	<footer class="panel-footer">
		<slot name="footer" />
	</footer>
</div>
