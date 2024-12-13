"use client"
import React, { useEffect, useState } from "react"
import { db } from "@/utils/db"
import { InterviewPro } from "@/utils/schema"
import { eq } from "drizzle-orm"
import QuestionsSection from "./_components/QuestionsSection"
import RecordAnswerSection from "./_components/RecordAnswerSection"
const StartInterview = ({ params }) => {
	const [interviewData, setInterviewData] = useState()
	const [mockInterviewQuestions, setMockInterviewQuestions] = useState()
	const [activeQuestionIdx, setActiveQuestionIdx] = useState(0)
	useEffect(() => {
		console.log(params.interviewId)
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
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				{/* Question */}
				<QuestionsSection
					mockInterviewQuestions={mockInterviewQuestions}
					activeQuestionIdx={activeQuestionIdx}
				/>
				{/* Video/Audio */}
				<RecordAnswerSection
					activeQuestionIdx={activeQuestionIdx}
					mockInterviewQuestions={mockInterviewQuestions}
					interviewData={interviewData}
				/>
			</div>
		</div>
	)
}

export default StartInterview
