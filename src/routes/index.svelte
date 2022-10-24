<script>
  import {Router, Route} from 'svelte-routing';
  import Home from '../components/Home/Home.svelte';
  import Privacy from '../components/Privacy/Privacy.svelte';

  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="/" component={Home}  />
    <Route path="/privacy" component={Privacy} />
  </div>
</Router>