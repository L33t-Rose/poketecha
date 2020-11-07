<script>
	import Tailwindcss from './Tailwindcss.svelte';
	import {Router} from 'svelte-router-spa';
  	import {routes} from './routes';
</script>

<Tailwindcss />
<Router {routes}/>