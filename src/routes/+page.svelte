<script lang="ts">
	import ThemeSwitch from '$lib/components/theme-switch.svelte';
</script>

<svelte:head>
	<title>Euan Deas</title>
</svelte:head>

<!-- Larger Screens -->
<div class="hidden relative h-screen md:flex flex-col items-center justify-center">
	<div class="absolute top-0 right-0 p-4">
		<ThemeSwitch />
	</div>

	<!-- The container for the two columns -->
	<div
		class="w-full max-w-[960px] flex flex-row justify-center mx-10 min-h-0"
	>
		<div
			class="flex-1 px-10 p-4 pl-10 mx-2 mb-0 text-left flex flex-col justify-start mt-0"
		>
			<h1 class="text-6xl font-bold">Euan Deas</h1>
			<h2 class="text-2xl text-gray-600 mt-2">
				Student, Back-end Software Dev & Endurance Athlete
			</h2>
		</div>
		<div
			class="flex-1 px-10 p-4 pr-10 mx-2 mb-0 flex items-center justify-end"
		>
			<ul class="space-y-4 text-right">
				<li><a href="#about" class="text-2xl hover:underline">About</a></li>
				<li><a href="#projects" class="text-2xl hover:underline">Projects</a></li>
				<li><a href="#blog" class="text-2xl hover:underline">Blog</a></li>
			</ul>
		</div>
	</div>
</div>

<!-- Smaller Screens -->
<div class="md:hidden relative h-screen flex flex-col items-center justify-center">
	<div class="fixed text-center pt-12">
		<div class="absolute top-0 right-0 p-4">
			<ThemeSwitch />
		</div>
		<div class="p-4 text-center">
			<h1 class="text-4xl font-bold">Euan Deas</h1>
			<h2 class="text-xl text-gray-600 mt-2">
				Student, Back-end Software Dev & Endurance Athlete
			</h2>
		</div>
	</div>
	<div class="p-4 text-center">
		<ul class="space-y-4">
			<li><a href="#about" class="text-xl hover:underline">About</a></li>
			<li><a href="#projects" class="text-xl hover:underline">Projects</a></li>
			<li><a href="#blog" class="text-xl hover:underline">Blog</a></li>
		</ul>
	</div>
</div>