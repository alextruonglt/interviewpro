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

export const UserAnswer = pgTable("userAnswer", {
	id: serial("id").primaryKey(),
	mockIdRef: varchar("mockId").notNull(),
	question: varchar("question").notNull(),
	correctAnswer: text("correctAnswer"),
	userAnswer: text("userAnswer"),
	feedback: text("feedback"),
	rating: varchar("rating"),
	userEmail: varchar("userEmail"),
	createdAt: varchar("createdAt"),
})
