import { error } from '@sveltejs/kit';

export async function load({ params: { slug } }) {
	try {
		const post = await import(`../../../posts/${slug}/${slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find ${slug}`);
	}
}
