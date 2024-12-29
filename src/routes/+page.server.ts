import { db } from '$lib/server/db';
import { workspaces } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const workspaceList = await db.select().from(workspaces);

	return {
		workspaces: workspaceList
	};
};
