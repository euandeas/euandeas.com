<script lang="ts">
	import ThemeSwitch from '$lib/components/theme-switch.svelte';
	import HamburgerButton from '$lib/components/hamburger-button.svelte';

	export let isSticky: boolean = false;
	let checked = false;
</script>

<div class="fixed top-0 right-0 p-3 z-20 {isSticky ? 'hidden md:inline' : ''}">
	<ThemeSwitch />
</div>

<div class="fixed top-0 right-16 z-20 {isSticky ? 'md:hidden' : 'hidden'}">
	<HamburgerButton bind:checked />
</div>

<div
	class="transition-all duration-700 md:hidden fixed top-0 w-full bg-background z-10 {checked
		? 'h-full'
		: 'h-0'}"
>
	<div
		class="transition-all duration-700 px-10 mb-0 flex flex-col justify-center items-center py-56 w-full h-full {checked
			? 'opacity-1 py-56'
			: 'opacity-0 py-0'}"
	>
		<a
			href="#about"
			class="flex-1 transition-all duration-500 hover:underline {checked
				? ''
				: 'pointer-events-none'}">About</a
		>
		<a
			href="#projects"
			class="flex-1 transition-all duration-700 hover:underline {checked
				? ''
				: 'pointer-events-none'}">Projects</a
		>
		<a
			href="#blog"
			class="flex-1 transition-all duration-700 hover:underline {checked
				? ''
				: 'pointer-events-none'}">Blog</a
		>
		<div class="transition-all duration-500 flex-1 {checked ? '' : 'pointer-events-none'}">
			<ThemeSwitch />
		</div>
	</div>
</div>

<div
	class="bg-background transition-all duration-700 fixed w-full text-center flex flex-col items-center justify-center
{isSticky ? 'h-16' : 'h-screen'} z-0"
>
	<div
		class="transition-all duration-700 w-full {isSticky
			? 'max-w-full'
			: 'max-w-[960px]'} flex md:flex-row flex-col justify-center mx-10 min-h-full"
	>
		<div class="flex-1 px-10 md:text-left flex items-center justify-start">
			<div class="flex-col">
				<h1 class="transition-all duration-700 font-bold {isSticky ? 'text-2xl' : 'text-6xl'}">
					Euan Deas
				</h1>
				<h2
					class="transition-all duration-700 {isSticky
						? 'text-transparent text-[0rem] mt-0'
						: 'text-gray-600 text-2xl mt-2'}"
				>
					Student, Back-end Software Dev & Endurance Athlete
				</h2>
			</div>
		</div>
		<div
			class="flex-1 px-10 mb-0 flex {isSticky
				? 'hidden md:flex flex-row mr-10 justify-end items-center'
				: 'flex-col md:justify-center md:pt-0 pt-10'}"
		>
			<a
				href="#about"
				class="transition-all duration-700 hover:underline {isSticky
					? 'ml-5'
					: 'md:ml-auto text-2xl py-2'}">About</a
			>
			<a
				href="#projects"
				class="transition-all duration-700 hover:underline {isSticky
					? 'ml-5'
					: 'md:ml-auto text-2xl py-2'}">Projects</a
			>
			<a
				href="#blog"
				class="transition-all duration-700 hover:underline {isSticky
					? 'ml-5'
					: 'md:ml-auto text-2xl py-2'}">Blog</a
			>
		</div>
	</div>
</div>
