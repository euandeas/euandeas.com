<script lang="ts">
	import Header from '$lib/components/header.svelte';

	let y: number = $state(0);
	let isSticky = true;

</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<title>Euan Deas</title>
</svelte:head>

<div class="flex bg-secondary justify-center">
	<Header {isSticky} />

	<div class="pt-24 max-w-[960px] w-full h-screen">
		<h1 class="text-3xl font-semibold pb-4">Privacy... It's important.</h1>
        <p>I don't like my data being collected so why would I collect yours. This site collects no user data and any off my apps aim to collect only data needed for its function.</p>
	</div>
</div>