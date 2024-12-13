"use client"
import React, { useState } from "react"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { chatSession } from "@/utils/GeminiAiModal"
import { LoaderCircle } from "lucide-react"
import { db } from "@/utils/db"
import { InterviewPro } from "@/utils/schema"
import { v4 as uuidv4 } from "uuid"
import { useUser } from "@clerk/nextjs"
import moment from "moment"
import { useRouter } from "next/navigation"

const AddNewInterview = () => {
	const [openDialog, setOpenDialog] = useState(false)
	const [jobPosition, setJobPosition] = useState()
	const [jobDesc, setJobDesc] = useState()
	const [jobExp, setJobExp] = useState()
	const [loading, setLoading] = useState(false)
	const [jsonResponse, setJsonResponse] = useState([])
	const router = useRouter()
	const { user } = useUser()
	const onSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)

		console.log(jobPosition, jobDesc, jobExp)

		const InputPrompt = `I need you to to come up with 5 interview questions based on ${jobPosition}. Here is the job description ${jobDesc}. The years of experince is ${jobExp}. Please give the response in JSON format. With question, then answer as text JSON`
		const result = await chatSession.sendMessage(InputPrompt)
		const MockJsonResp = result.response
			.text()
			.replace("```json", "")
			.replace("```", "")
		console.log(JSON.parse(MockJsonResp))
		setJsonResponse(MockJsonResp)

		if (MockJsonResp) {
			const response = await db
				.insert(InterviewPro)
				.values({
					mockId: uuidv4(),
					jsonMockResp: MockJsonResp,
					jobPosition: jobPosition,
					jobDesc: jobDesc,
					jobExperience: jobExp,
					createdBy: user?.primaryEmailAddress?.emailAddress,
					createdAT: moment().format("DD-MM-yyyy"),
				})
				.returning({ mockId: InterviewPro.mockId })
			if (response) {
				setOpenDialog(false)
				router.push(`/dashboard/interview/${result[0]}`)
			}
		} else {
			console.log("ERROR")
		}

		setLoading(false)
	}

	return (
		<div>
			<div
				className="p-10 border rounded-lg bg-secondary
            hover:scale-105 hover:shadow-md cursor-pointer transition-all"
			>
				<h2
					className="font-bold text-lg text-center"
					onClick={() => setOpenDialog(true)}
				>
					+ Add New
				</h2>
			</div>
			<Dialog open={openDialog}>
				<DialogContent className="max-w-2xl">
					<DialogHeader>
						<DialogTitle className="text-2xl">
							Tell Us More About Your Interview
						</DialogTitle>
						<DialogDescription>
							<form onSubmit={onSubmit}>
								<div>
									<h2>Add Details About The Role</h2>
									<div className="mt-7 my-3">
										<label htmlFor="">Job Position</label>
										<Input
											placeholder="Ex. ML Engineer"
											required
											onChange={(e) => setJobPosition(e.target.value)}
										/>
									</div>
									<div className="my-3">
										<label htmlFor="">Job Description</label>
										<Textarea
											placeholder="Ex. Paste the whole description or list tech stack if applicable"
											required
											onChange={(e) => setJobDesc(e.target.value)}
										/>
									</div>
									<div className="my-3">
										<label htmlFor="">Years Of Experience</label>
										<Input
											placeholder="Ex. 5"
											type="Number"
											max="30"
											min="0"
											onChange={(e) => setJobExp(e.target.value)}
										/>
									</div>
								</div>
								<div className="flex gap-5 justify-end">
									<Button
										type="button"
										variant="ghost"
										onClick={() => setOpenDialog(false)}
									>
										Cancel
									</Button>
									<Button type="submit" disabled={loading}>
										{loading ? (
											<>
												<LoaderCircle className="animate-spin" />
												Generating
											</>
										) : (
											"Start Interview"
										)}
									</Button>
								</div>
							</form>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default AddNewInterview
