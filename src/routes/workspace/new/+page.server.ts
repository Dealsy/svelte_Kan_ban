import { db } from '$lib/server/db';
import { workspaces } from '$lib/server/db/schema';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const description = formData.get('description');

		if (!name) {
			return fail(400, { error: 'Name is required' });
		}

		try {
			const [workspace] = await db
				.insert(workspaces)
				.values({
					name: name.toString(),
					description: description?.toString() || null
				})
				.returning();

			return {
				success: true,
				url: `/workspace/${workspace.id}`
			};
		} catch (err) {
			console.error('Failed to create workspace:', err);
			return fail(500, { error: 'Failed to create workspace' });
		}
	}
} satisfies Actions;
