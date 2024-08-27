<script lang="ts">
	let { data } = $props();

	import Header from '$lib/components/header.svelte';
	import * as Card from '$lib/components/ui/card';

	let y: number = $state(0);
	let isSticky = $state(false);

	const events = [
		{ year: '2003', description: 'Born in the UK.' },
		{ year: '2018', description: "Launched Simple Android Program - 'Rower Stuff'" },
		{ year: '2021', description: "Launched Android Program - 'Club Clays'" },
		{ year: '2021', description: 'Started Computer Science Msci at the University of Nottingham.' },
		{ year: '2024-', description: 'Became President of The University of Nottingham Boat Club' }
	];

	const technologies = [
		{ name: 'C/C++', experience: '3' },
		{ name: 'C#', experience: '3' },
		{ name: 'Java', experience: '3' },
		{ name: 'Rust', experience: '2' },
		{ name: 'HTML/CSS/Typescript', experience: '1' },
		{ name: 'Linux', experience: '2' },
		{ name: 'Git', experience: '3' },
		{ name: 'SQL', experience: '3' },
		{ name: 'Android (Native & .Net)', experience: '2' },
		{ name: 'Python', experience: '2' },
		{ name: 'Haskell', experience: '1' }
	];

	$effect(() => {
		if (!isSticky && y > 10) {
			document.body.style.overflow = 'hidden';
			isSticky = true;
			scrollTo(0, 11);
			setTimeout(() => {
				document.body.style.overflow = '';
			}, 750);
		} else if (isSticky && y <= 10) {
			isSticky = false;
		}
	});
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<title>Euan Deas</title>
</svelte:head>

<div class="flex bg-background justify-center">
	<Header {isSticky} />

	<div class="flex pt-24 max-w-[960px] w-full mx-10">
		<!-- Adjust padding-top to accommodate header height -->
		<div>
			<span id="about" class="absolute -translate-y-16"></span>
			<div class="w-full flex md:flex-row flex-col pb-8">
				<div class="flex pr-4 md:pb-0 pb-8">
					<img class="rounded max-w-64 object-cover m-auto" src="me.jpg" alt="Euan" />
				</div>
				<div class="flex-1 pl-4">
					<h1 class="text-3xl font-semibold pb-6">About Me</h1>
					<p class="pb-4">
						Hey, I'm Euan! I'm a student software developer currently pursuing a Computer Science
						Msci degree at the University of Nottingham. I've been passionate about software
						development since 2016, starting out as a self-taught programmer and continuing to
						deepen my knowledge through my studies. My main areas of interest are privacy, security,
						cryptography and open-source projects. Although my focus is primarily on back-end
						development, I do have limited experience with front-end development through creating
						websites, web apps and mobile apps.
					</p>

					<p class="pb-8">
						This website is where I will share my journey, projects, and experiences as I continue
						into the software industry.
					</p>
				</div>
			</div>

			<div class="w-full flex md:flex-row flex-col pb-8">
				<div class="flex-1 pr-4">
					<h2 class="text-2xl font-semibold pb-6">Biography</h2>
					<div class="relative flex flex-col md:pb-0 pb-8">
						{#each events as event, i}
							<div class="flex items-stretch relative">
								<!-- Year -->
								<div class="w-1/4 text-right">
									<span class="text-lg font-semibold">{event.year}</span>
								</div>

								<!-- Dot and Line Container -->
								<div class="relative flex flex-col items-center w-1/12 px-8">
									<!-- Line -->
									{#if i !== events.length - 1}
										<div
											class="absolute dark:bg-white bg-black mt-2 h-full"
											style="width: 2px;"
										></div>
									{/if}
									<!-- Dot -->
									<div class="z-0 w-3 h-3 dark:bg-white bg-black rounded-full mt-2"></div>
								</div>

								<!-- Description -->
								<div class="w-7/12 pb-4">
									<p>{event.description}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class="flex-1 pl-4">
					<h2 class="text-2xl font-semibold">Technologies & Languages Experience</h2>
					<h2 class="text-sm text-gray-700 pb-6">
						The more intense the blue, the higher the level of experience.
					</h2>
					<div class="flex flex-wrap">
						{#each technologies as tech}
							{#if tech.experience === '1'}
								<Card.Root
									class="m-1 border-0 bg-gradient-to-tl dark:from-gray-600 dark:to-gray-400 from-gray-200 to-gray-100"
								>
									<Card.Header>
										<Card.Title class="text-sm">{tech.name}</Card.Title>
									</Card.Header>
								</Card.Root>
							{:else if tech.experience === '2'}
								<Card.Root class="m-1 border-0 bg-gradient-to-tl  from-sky-400 to-sky-200">
									<Card.Header>
										<Card.Title class="text-sm">{tech.name}</Card.Title>
									</Card.Header>
								</Card.Root>
							{:else}
								<Card.Root class="m-1 border-0 bg-gradient-to-tl  from-blue-700 to-blue-400">
									<Card.Header>
										<Card.Title class="text-sm">{tech.name}</Card.Title>
									</Card.Header>
								</Card.Root>
							{/if}
						{/each}
					</div>
				</div>
			</div>

			<div class="w-full flex md:flex-row flex-col pb-8">
				<div class="flex-1 pr-4 md:pb-0 pb-8">
					<h2 class="text-2xl font-semibold pb-6">Sports</h2>
					<p class="pb-4">
						I have been rowing since 2014, starting as a junior at Reading Rowing Club. During my
						time at university, I continued to row, and in my fourth and final year, I stepped into
						the role of President of the boat club. Although I haven't reached GB trials level, I
						consistently compete nationally with the university at events such as BUCS and HORR. I
						have also had the opportunity to attend qualifiers for and race at Henley Royal Regatta.
					</p>
					<p class="pb-8">
						While at university, I took up road cycling as a valuable cross-training activity for
						rowing. Although I don't compete in cycling, I thoroughly enjoy the sport and make an
						effort to ride whenever I can. Road cycling has introduced me to a broader world of
						endurance sports, from following the professional peloton to developing an interest in
						Ironman events. One of my goals before turning 30 is to complete an Ironman, and this
						pursuit forms the foundation of that ambition.
					</p>
				</div>
				<div class="flex pl-4">
					<img class="rounded max-w-64 object-cover m-auto" src="rowing.jpg" alt="Euan Rowing" />
				</div>
			</div>

			<h2 class="text-2xl font-semibold pb-6">Projects & Blogs Coming Soon!</h2>
		</div>
		<div id="projects"></div>
		<div id="blog"></div>
	</div>
</div>
