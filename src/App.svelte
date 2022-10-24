<script lang="ts">
	export let emailAddress: string;
</script>

<main>
	<h1>Worgle Support</h1>
	<img src="/worgle_icon1024.png" alt="worgle logo" width="256" height="256" />
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