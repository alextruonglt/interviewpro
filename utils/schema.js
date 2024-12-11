import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core"

export const InterviewPro = pgTable("interviewPro", {
	id: serial("id").primaryKey(),
	jsonMockResp: text("jsonMockResp").notNull(),
	jobPosition: varchar("jobPosition").notNull(),
	jobDesc: varchar("jobDesc").notNull(),
	jobExperience: varchar("jobExperience").notNull(),
	createdBy: varchar("createdBy").notNull(),
	createdAT: varchar("createdAt").notNull(),
	mockId: varchar("mockId").notNull(),
})
