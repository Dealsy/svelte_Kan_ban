import { db } from '$lib/server/db';
import { workspaces } from '$lib/server/db/schema';
import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const [workspace] = await db.select().from(workspaces).where(eq(workspaces.id, params.id));

	if (!workspace) {
		throw error(404, 'Workspace not found');
	}

	return {
		workspace
	};
};
