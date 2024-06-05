<script lang="ts">
	export let data;

    import ThemeSwitch from '$lib/components/theme-switch.svelte';
</script>

<svelte:head>
	<title>WOAH</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ThemeSwitch />
<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href="blog/{post.slug}" class="title">{post.title}</a>
				<p class="date">{post.date}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
