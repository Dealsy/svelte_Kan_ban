import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const workspaces = pgTable('workspaces', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	description: text('description'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const projects = pgTable('projects', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	description: text('description'),
	workspaceId: uuid('workspace_id')
		.notNull()
		.references(() => workspaces.id),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const tasks = pgTable('tasks', {
	id: uuid('id').primaryKey().defaultRandom(),
	title: text('title').notNull(),
	description: text('description'),
	status: text('status').notNull(), // 'todo' | 'in-progress' | 'done'
	priority: text('priority'), // 'low' | 'medium' | 'high'
	projectId: uuid('project_id')
		.notNull()
		.references(() => projects.id),
	dueDate: timestamp('due_date'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const comments = pgTable('comments', {
	id: uuid('id').primaryKey().defaultRandom(),
	content: text('content').notNull(),
	taskId: uuid('task_id')
		.notNull()
		.references(() => tasks.id),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});
