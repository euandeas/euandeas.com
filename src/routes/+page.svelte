<script lang="ts">
	import ThemeSwitch from '$lib/components/theme-switch.svelte';
</script>

<svelte:head>
	<title>Euan Deas</title>
</svelte:head>

<div class="relative h-screen flex flex-col items-center justify-center">
	<div class="absolute top-0 right-0 p-4">
		<ThemeSwitch />
	</div>
	<div
		class="w-full max-w-[960px] flex flex-col md:flex-row justify-center mx-10 min-h-screen md:min-h-0"
	>
		<div
			class="flex-none md:flex-1 px-10 pb-4 md:p-4 md:pl-10 mx-2 mb-2 md:mb-0 text-center md:text-left flex flex-col justify-start md:justify-start mt-20 md:mt-0"
		>
			<h1 class="text-6xl font-bold">Euan Deas</h1>
			<h2 class="text-2xl text-gray-600 mt-2">
				Student, Back-end Software Dev & Endurance Athlete
			</h2>
		</div>
		<div
			class="flex-auto md:flex-1 px-10 md:p-4 md:pr-10 mx-2 mb-2 md:mb-0 flex items-center justify-center md:justify-end"
		>
			<p class="space-y-4 text-center md:text-right text-2xl">New Site Coming Soon!</p>
		</div>
	</div>
</div>