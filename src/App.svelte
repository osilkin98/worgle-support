<script>
  import Router from './routes/index.svelte';
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #040404;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>
<main>
  <Router />
</main>
