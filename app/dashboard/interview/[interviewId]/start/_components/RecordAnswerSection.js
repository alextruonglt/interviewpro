"use client"
import Webcam from "react-webcam"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import useSpeechToText from "react-hook-speech-to-text"
import { Mic } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { chatSession } from "@/utils/GeminiAiModal"
import { useUser } from "@clerk/nextjs"
import moment from "moment"
import { db } from "@/utils/db"
import { UserAnswer } from "@/utils/schema"

const RecordAnswerSection = ({
	mockInterviewQuestions,
	activeQuestionIdx,
	interviewData,
	setLoading,
	loading,
}) => {
	const [userAnswer, setUserAnswer] = useState("")
	const { user } = useUser()
	const {
		error,
		interimResult,
		isRecording,
		results,
		startSpeechToText,
		stopSpeechToText,
		setResults,
	} = useSpeechToText({
		continuous: true,
		useLegacyResults: false,
	})
	const { toast } = useToast()

	useEffect(() => {
		results.map((result) => {
			setUserAnswer((prevAnswer) => prevAnswer + result?.transcript)
		})
	}, [results])

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (!isRecording && userAnswer.length > 10) {
				updateUserAnswer()
			}
		}, 500)

		return () => clearTimeout(timeoutId)
	}, [userAnswer, isRecording])

	const startStopRecording = () => {
		if (isRecording) {
			stopSpeechToText()
		} else {
			startSpeechToText()
		}
	}

	const updateUserAnswer = async () => {
		setLoading(true)

		const currentQuestion = mockInterviewQuestions[activeQuestionIdx]?.question
		const correctAnswer = mockInterviewQuestions[activeQuestionIdx]?.answer

		const feebackPrompt = `Here's the job interview Question: ${currentQuestion}.
			Here is the user submitted answer: ${userAnswer}. note that this is from voice to text, so there's some typos.
			 Based on both the question and
			answer in the context of a job interview.
			Please rate it 0/100, and provide any feedback if neccasry. Do not exceen 3-5 sentences of feedback.
			Give it back in JSON with 2 fields, rating and feedback fields
			`

		const result = await chatSession.sendMessage(feebackPrompt)

		const mockJsonResp = result.response
			.text()
			.replace("```json", "")
			.replace("```", "")
		console.log(mockJsonResp)
		const jsonFeebackResponse = JSON.parse(mockJsonResp)
		const response = await db.insert(UserAnswer).values({
			mockIdRef: interviewData?.mockId,
			question: mockInterviewQuestions[activeQuestionIdx]?.question,
			correctAnswer: mockInterviewQuestions[activeQuestionIdx]?.answer,
			userAnswer: userAnswer,
			feedback: jsonFeebackResponse?.feedback,
			rating: jsonFeebackResponse?.rating,
			userEmail: user?.primaryEmailAddress?.emailAddress,
			createdAt: moment().format("DD-MM-YYYY"),
		})

		if (response) {
			toast({
				title: "Successs",
				description: "This has been recorded",
			})

			setUserAnswer("")
			setResults([])
		}
		setResults([])

		setLoading(false)
	}
	console.log(interviewData)
	return (
		<div className="flex items-center justify-center flex-col">
			<div className="flex flex-col mt-20 justify-center items-center bg-slate-100 rounded-lg p-5">
				<Image
					src={"/Webcam.png"}
					width={200}
					height={200}
					className="absolute"
					alt="webcam"
				/>
				<Webcam
					mirrored={true}
					style={{
						height: 300,
						width: "100%",
						zIndex: 10,
					}}
				/>
			</div>
			<Button
				disabled={loading}
				className="my-10 text-white bg-primary"
				onClick={startStopRecording}
			>
				{isRecording ? (
					<h2 className="text-red-500 flex gap-2">
						<Mic />
						Stop Recording
					</h2>
				) : (
					"Record Answer"
				)}
			</Button>
		</div>
	)
}

export default RecordAnswerSection
