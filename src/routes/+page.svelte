<script lang="ts">
	import Header from '$lib/components/header.svelte';

	let y: number = $state(0);
	let isSticky = $state(false);

	$effect(() => {
		isSticky = y > 30;
	});
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<title>Euan Deas</title>
</svelte:head>

<div>
	<Header {isSticky} />

	<div class="pt-16">
		<!-- Adjust padding-top to accommodate header height -->
		<div class="h-screen bg-secondary p-16">1</div>
		<div class="h-screen bg-secondary p-16">2</div>
		<div class="h-screen bg-secondary p-16">3</div>
	</div>
</div>
