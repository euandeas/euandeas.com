import type { Project } from '$lib/types';

export async function load({ fetch }) {
	const responseproj = await fetch('api/projects');
	const projects: Project[] = await responseproj.json();
	const responsepost = await fetch('api/projects');
	const posts: Post[] = await responsepost.json();
	return { projects, posts };
}
