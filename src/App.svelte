<script lang="ts">
	export let emailAddress: string;
</script>

<main>
	<h1>Worgle Support</h1>
	<p>Send an email to <a href={`mailto:${emailAddress}`}>{emailAddress}</a> for support on the Worgle app.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>