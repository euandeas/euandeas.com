<script>
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';

	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<slot />
<Footer/>