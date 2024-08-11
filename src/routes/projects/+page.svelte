<script lang="ts">
	export let data;
</script>

<section>
	<ul class="posts">
		{#each data.projects as post}
			<li class="post">
				<a href="blog/{post.slug}" class="title">{post.title}</a>
				<p class="date">{post.date}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
