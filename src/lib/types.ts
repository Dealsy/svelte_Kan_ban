export type Workspace = {
	id: string;
	name: string;
	description: string | null;
	createdAt: Date;
	updatedAt: Date;
};

export type WorkspaceQuery = {
	workspace: Workspace;
};
