<script lang="ts">
	import ThemeSwitch from '$lib/components/theme-switch.svelte';
	import { page } from '$app/stores';
</script>

<div class="fixed top-0 right-0 p-3 z-20">
	<ThemeSwitch />
</div>

<div
	class="bg-background transition-all duration-700 fixed w-full text-center flex flex-col items-center justify-center h-screen z-0"
>
	<div
		class="transition-all duration-700 w-full max-w-[1400px] flex md:flex-row flex-col justify-center mx-10 min-h-full"
	>
		<div class="flex-1 px-10 md:text-left flex items-center justify-start">
			<div class="flex-col">
				<h1 class="transition-all duration-700 font-bold text-6xl">Euan Deas</h1>
				<h2 class="transition-all duration-700 text-gray-600 text-2xl mt-2">
					Student, Back-end Software Dev & Endurance Athlete
				</h2>
			</div>
		</div>
		<div class="flex-1 px-10 mb-0 flex flex-col md:justify-center md:pt-0 pt-10">
			<p class="text-3xl">
				{$page.status} - {$page.error.message}
			</p>
		</div>
	</div>
</div>
