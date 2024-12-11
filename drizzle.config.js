import { defineConfig } from "drizzle-kit"
export default defineConfig({
	dialect: "postgresql",
	schema: "./utils/schema.js",
	out: "./drizzle",
	dbCredentials: {
		url: "postgresql://Interview%20Pro_owner:A1LhE0CWnKQH@ep-jolly-tooth-a5atjrne.us-east-2.aws.neon.tech/interviewPro?sslmode=require",
	},
})
