<script lang="ts">
	import {Link} from 'svelte-routing';
	export let emailAddress: string;
</script>

<main>
	<h1>Worgle Support</h1>
	<img src="/worgle_icon1024.png" alt="worgle logo" width="256" height="256" />
	<p>Send an email to <a href={`mailto:${emailAddress}`}>{emailAddress}</a> for support on the Worgle app.</p>
	<Link to="/privacy">Privacy Policy</Link>
</main>
