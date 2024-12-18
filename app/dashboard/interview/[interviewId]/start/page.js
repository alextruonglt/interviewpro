"use client"
import React, { useEffect, useState } from "react"
import { db } from "@/utils/db"
import { InterviewPro } from "@/utils/schema"
import { eq } from "drizzle-orm"
import QuestionsSection from "./_components/QuestionsSection"
import RecordAnswerSection from "./_components/RecordAnswerSection"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useParams } from "next/navigation"

const StartInterview = () => {
	const params = useParams()

	const [interviewData, setInterviewData] = useState()
	const [mockInterviewQuestions, setMockInterviewQuestions] = useState()
	const [loading, setLoading] = useState(false)

	const [activeQuestionIdx, setActiveQuestionIdx] = useState(0)
	useEffect(() => {
		GetInterviewDetails()
	}, [])

	// Pull interivew data from id params
	const GetInterviewDetails = async () => {
		const result = await db
			.select()
			.from(InterviewPro)
			.where(eq(InterviewPro.mockId, params.interviewId))

		const jsonMockResp = JSON.parse(result[0]?.jsonMockResp)

		setMockInterviewQuestions(jsonMockResp)
		setInterviewData(result[0])
	}

	console.log(`tacos ${interviewData}`)
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				{/* Question */}
				<QuestionsSection
					mockInterviewQuestions={mockInterviewQuestions}
					activeQuestionIdx={activeQuestionIdx}
					setActiveQuestionIdx={setActiveQuestionIdx}
				/>
				{/* Video/Audio */}
				<RecordAnswerSection
					activeQuestionIdx={activeQuestionIdx}
					mockInterviewQuestions={mockInterviewQuestions}
					interviewData={interviewData}
					setLoading={setLoading}
					loading={loading}
				/>
			</div>
			<div className="flex justify-end gap-6">
				{activeQuestionIdx > 0 && (
					<Button
						disabled={loading}
						onClick={() => setActiveQuestionIdx((prevState) => prevState - 1)}
					>
						Previous Question
					</Button>
				)}

				{activeQuestionIdx != mockInterviewQuestions?.length - 1 && (
					<Button
						disabled={loading}
						onClick={() => setActiveQuestionIdx((prevState) => prevState + 1)}
					>
						Next Question
					</Button>
				)}

				{activeQuestionIdx == mockInterviewQuestions?.length - 1 && (
					<Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
						<Button disabled={loading}>End Interview</Button>
					</Link>
				)}
			</div>
		</div>
	)
}

export default StartInterview
