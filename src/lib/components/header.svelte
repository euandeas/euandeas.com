<script lang="ts">
	import ThemeSwitch from '$lib/components/theme-switch.svelte';
	import HamburgerButton from '$lib/components/hamburger-button.svelte';
	export let year = new Date().getFullYear();

	export let isSticky: boolean = false;
	let checked = false;
</script>

<div class="fixed top-0 right-0 p-3 z-50 {isSticky ? 'hidden md:inline' : ''}">
	<ThemeSwitch />
</div>

<div class="fixed top-0 right-16 z-50 {isSticky ? 'md:hidden' : 'hidden'}">
	<HamburgerButton bind:checked />
</div>

<div
	class="transition-all duration-700 md:hidden fixed top-0 w-full bg-background z-40 {checked
		? 'h-full'
		: 'h-0'}"
>
	<div
		class="transition-all duration-700 px-10 mb-0 flex flex-col justify-center items-center w-full h-full {checked
			? 'opacity-1 py-56'
			: 'opacity-0 py-0'}"
	>
		<a
			href=""
			class="flex-1 transition-all duration-500 hover:underline {checked
				? ''
				: 'pointer-events-none'}" on:click={() => checked = false}>About</a
		>
		<a
			href=""
			class="flex-1 transition-all duration-700 hover:underline {checked
				? ''
				: 'pointer-events-none'}" on:click={() => checked = false}>Projects</a
		>
		<a
			href=""
			class="flex-1 transition-all duration-700 hover:underline {checked
				? ''
				: 'pointer-events-none'}" on:click={() => checked = false}>Blog</a
		>
		<div class="transition-all duration-500 flex-1 {checked ? '' : 'pointer-events-none'}">
			<ThemeSwitch />
		</div>
	</div>
</div>

<div
	class="bg-background transition-all duration-700 fixed w-full text-center flex flex-col items-center justify-center
{isSticky ? 'h-16' : 'h-screen'} z-30"
>
	<div
		class="transition-all duration-700 w-full {isSticky
			? 'max-w-full'
			: 'max-w-[1400px]'} flex md:flex-row flex-col justify-center mx-10 min-h-full"
	>
		<div class="flex-1 md:px-10 px-6 md:text-left flex items-center justify-start">
			<div class="flex-col">
				<h1 class="transition-all duration-700 font-bold {isSticky ? 'text-2xl' : 'text-6xl'}">
					<a href="/">Euan Deas</a>
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
				href=""
				class="transition-all duration-700 hover:underline {isSticky
					? 'ml-5'
					: 'md:ml-auto text-2xl py-2'}">About</a
			>
			<a
				href=""
				class="transition-all duration-700 hover:underline {isSticky
					? 'ml-5'
					: 'md:ml-auto text-2xl py-2'}">Projects</a
			>
			<a
				href=""
				class="transition-all duration-700 hover:underline {isSticky
					? 'ml-5'
					: 'md:ml-auto text-2xl py-2'}">Blog</a
			>
		</div>
	</div>
	<div class="w-full -translate-y-8 {isSticky ? 'hidden' : ''}">
		<div class="flex justify-between items-center px-4">
			<span
				class="transition-all duration-700 {isSticky
					? 'text-transparent'
					: 'text-gray-700'} text-sm md:mx-auto"
				>Euan Deas {year} -
				<a
					class="hover:underline {isSticky ? 'pointer-events-none' : ''}"
					href="mailto:contact@euandeas.com">contact@euandeas.com</a
				></span
			>
			<div class="flex justify-end md:pr-10">
				<a
					class="ml-2 {isSticky ? 'pointer-events-none' : ''}"
					href="https://github.com/euandeas"
					target="_blank"
				>
					<svg
						class="w-6 h-6 transition-all duration-700 {isSticky
							? 'fill-transparent'
							: 'fill-gray-700'}"
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><title>GitHub</title><path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						/></svg
					>
				</a>
				<a
					class="ml-2 pl-2 {isSticky ? 'pointer-events-none' : ''}"
					href="https://www.linkedin.com/in/euandeas"
					target="_blank"
				>
					<svg
						class="w-6 h-6 transition-all duration-700 {isSticky
							? 'fill-transparent'
							: 'fill-gray-700'}"
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><title>LinkedIn</title><path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						/></svg
					>
				</a>
			</div>
		</div>
	</div>
</div>
